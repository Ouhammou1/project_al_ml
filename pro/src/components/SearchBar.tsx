import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form 
      className="w-full max-w-xl mx-auto relative" 
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="input pl-10 pr-10 py-3 bg-white focus:bg-white"
          placeholder="Search for medicinal plants..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            className="absolute inset-y-0 right-12 flex items-center px-3 text-gray-500 hover:text-gray-700"
            onClick={handleClear}
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;