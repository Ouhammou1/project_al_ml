import React, { useState, useEffect } from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { historyService } from '../services/historyService';
import { medicinalPlants, getPlantById } from '../data/plants';
import { Recognition } from '../types';

const History: React.FC = () => {
  const [history, setHistory] = useState<Recognition[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // Load history data
    const historyData = historyService.getHistory();
    setHistory(historyData);
    setIsEmpty(historyData.length === 0);
  }, []);

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your recognition history?')) {
      historyService.clearHistory();
      setHistory([]);
      setIsEmpty(true);
    }
  };

  const handleRemoveItem = (id: string) => {
    historyService.removeRecognition(id);
    setHistory(prevHistory => {
      const newHistory = prevHistory.filter(item => item.id !== id);
      setIsEmpty(newHistory.length === 0);
      return newHistory;
    });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary-800">Recognition History</h1>
          <p className="text-gray-600 mt-2">View your previous plant identifications</p>
        </div>
        
        {!isEmpty && (
          <button 
            className="btn btn-secondary flex items-center"
            onClick={handleClearHistory}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear History
          </button>
        )}
      </div>
      
      {isEmpty ? (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <Clock className="h-16 w-16 text-gray-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No History Yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Your plant recognition history will appear here after you identify some plants.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {history.map(item => {
            const plant = getPlantById(item.plantId);
            if (!plant) return null;
            
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row animate-fade-in"
              >
                <div className="md:w-1/4 h-48 md:h-auto relative">
                  <img 
                    src={item.imageUrl} 
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-700">{plant.name}</h3>
                      <p className="text-sm italic text-gray-600">{plant.scientificName}</p>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label="Remove from history"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Identified on {formatDate(item.timestamp)}</span>
                  </div>
                  
                  <div className="mt-2">
                    <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                      Confidence: {(item.confidence * 100).toFixed(1)}%
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mt-3 line-clamp-2">{plant.description}</p>
                  
                  <button className="btn btn-outline mt-4">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;