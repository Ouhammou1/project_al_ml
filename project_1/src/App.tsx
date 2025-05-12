import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Database from './pages/Database';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'history' | 'database'>('home');

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'history':
        return <History />;
      case 'database':
        return <Database />;
      default:
        return <Home />;
    }
  };

  // Update page and handle navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'history' | 'database') => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#" 
                className={`inline-block py-4 border-b-2 ${
                  currentPage === 'home' 
                    ? 'border-primary-600 text-primary-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-primary-600'
                }`}
                onClick={(e) => handleNavigation(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`inline-block py-4 border-b-2 ${
                  currentPage === 'history' 
                    ? 'border-primary-600 text-primary-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-primary-600'
                }`}
                onClick={(e) => handleNavigation(e, 'history')}
              >
                History
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`inline-block py-4 border-b-2 ${
                  currentPage === 'database' 
                    ? 'border-primary-600 text-primary-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-primary-600'
                }`}
                onClick={(e) => handleNavigation(e, 'database')}
              >
                Database
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;