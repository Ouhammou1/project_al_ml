import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PlantCard from '../components/PlantCard';
import { medicinalPlants, searchPlants } from '../data/plants';
import { Plant } from '../types';

const Database: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>(medicinalPlants);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setPlants(medicinalPlants);
    } else {
      const results = searchPlants(query);
      setPlants(results);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-2">Medicinal Plant Database</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive collection of medicinal plants and their properties.
        </p>
      </div>
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {searchQuery && (
        <div className="mb-6">
          {plants.length > 0 ? (
            <p className="text-gray-700">
              Found <span className="font-medium">{plants.length}</span> plants matching "<span className="font-medium">{searchQuery}</span>"
            </p>
          ) : (
            <p className="text-gray-700">
              No plants found matching "<span className="font-medium">{searchQuery}</span>"
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Database;