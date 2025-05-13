import React, { useState, useCallback } from 'react';
import { Leaf, Loader2 } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import CameraCapture from '../components/CameraCapture';
import VideoCapture from '../components/VideoCapture';
import PlantCard from '../components/PlantCard';
import SearchBar from '../components/SearchBar';
import { recognitionService } from '../services/recognitionService';
import { historyService } from '../services/historyService';
import { Plant } from '../types';
import { medicinalPlants } from '../data/plants';

const Home: React.FC = () => {
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState<{ plant: Plant, confidence: number } | null>(null);

  const handleImageCaptured = useCallback(async (imageData: string) => {
    // console.log("image data: ", imageData);
    
    setIsRecognizing(true);
    setRecognitionResult(null);
    
    try {
      const result = await recognitionService.recognizePlant(imageData);
      setRecognitionResult(result);
      
      // Save to history
      historyService.addRecognition({
        plantId: result.plant.id,
        imageUrl: imageData,
        confidence: result.confidence,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Recognition error:', error);
      // Handle error state
    } finally {
      setIsRecognizing(false);
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    // In a real app, this would search the database or API
    console.log('Searching for:', query);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-8 shadow-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 pr-0 md:pr-8">
            <h1 className="text-4xl font-bold text-white mb-4 animate-slide-up">
              Identify Medicinal Plants Instantly
            </h1>
            <p className="text-primary-100 text-lg mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Upload an image, take a photo, or use video stream to identify medicinal plants and learn about their properties and uses.
            </p>
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CameraCapture onImageCaptured={handleImageCaptured} />
              <VideoCapture onFrameCaptured={handleImageCaptured} />
            </div>
          </div>
          <div className="md:w-5/12 mt-8 md:mt-0 flex justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-white opacity-10" />
              </div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-accent-400/30 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-2">Upload Your Plant Photo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI will analyze your image and provide information about the medicinal properties of the identified plant.
          </p>
        </div>
        
        <ImageUploader 
          onImageCaptured={handleImageCaptured}
          isProcessing={isRecognizing}
        />
        
        {isRecognizing && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full">
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              <span>Analyzing plant image...</span>
            </div>
          </div>
        )}
        
        {recognitionResult && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              Plant Identified!
            </h2>
            <div className="max-w-md mx-auto">
              <PlantCard 
                plant={recognitionResult.plant} 
                confidence={recognitionResult.confidence}
              />
            </div>
          </div>
        )}
      </section>
      
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-2">Search Our Database</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Looking for a specific medicinal plant? Search our comprehensive database.
          </p>
        </div>
        
        <SearchBar onSearch={handleSearch} />
      </section>
      
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-2">Popular Medicinal Plants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of the most commonly used medicinal plants and their properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicinalPlants.slice(0, 3).map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="btn btn-outline">
            View All Plants
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;