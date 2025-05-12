import React from 'react';
import { Info, AlertTriangle, Heart } from 'lucide-react';
import type { Plant } from '../types';

interface PlantCardProps {
  plant: Plant;
  confidence?: number;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, confidence }) => {
  return (
    <div className="card animate-fade-in">
      <div className="relative h-48 md:h-60 overflow-hidden">
        <img 
          src={plant.imageUrl} 
          alt={plant.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {confidence !== undefined && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-card text-white px-3 py-1 rounded-full text-sm">
            Confidence: {(confidence * 100).toFixed(1)}%
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-primary-700">{plant.name}</h3>
            <p className="text-sm italic text-gray-600 mb-2">{plant.scientificName}</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-700 mt-2 line-clamp-3">{plant.description}</p>
        
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex items-center text-primary-700 mb-1">
              <Info className="h-4 w-4 mr-1" />
              <h4 className="font-medium">Medicinal Uses</h4>
            </div>
            <ul className="ml-6 text-sm text-gray-700 list-disc">
              {plant.medicinalUses.slice(0, 3).map((use, index) => (
                <li key={index}>{use}</li>
              ))}
              {plant.medicinalUses.length > 3 && (
                <li className="text-primary-500">+{plant.medicinalUses.length - 3} more uses</li>
              )}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center text-amber-600 mb-1">
              <AlertTriangle className="h-4 w-4 mr-1" />
              <h4 className="font-medium">Warnings</h4>
            </div>
            <ul className="ml-6 text-sm text-gray-700 list-disc">
              {plant.warnings.slice(0, 2).map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
              {plant.warnings.length > 2 && (
                <li className="text-amber-500">+{plant.warnings.length - 2} more warnings</li>
              )}
            </ul>
          </div>
        </div>
        
        <button className="btn btn-outline w-full mt-4">
          View Complete Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;