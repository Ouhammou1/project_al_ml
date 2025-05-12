import React from 'react';
import { Heart, Github as GitHub } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">MediPlant</h3>
            <p className="text-primary-100 mb-4">
              Promoting safe and informed use of traditional medicine through AI-powered plant recognition.
            </p>
            <div className="flex items-center text-primary-200">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse-gentle" />
              <span>for herbalists and plant enthusiasts</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-primary-100">
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Plant Database</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Medicinal Uses</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Safety Guidelines</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-2 text-primary-100">
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors flex items-center">
                  <GitHub className="h-5 w-5 mr-2" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Contribute</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Report Issues</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-700 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} MediPlant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;