import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-accent-400 animate-leaf-sway" />
          <h1 className="text-2xl font-bold text-white">MediPlant</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                History
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                Database
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;