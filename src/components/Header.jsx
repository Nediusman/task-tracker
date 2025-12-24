import { useTasks } from '../store/taskContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTasks();
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* App Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
            📝 Task Tracker
          </h1>
          
          {/* Navigation and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/stats" 
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  location.pathname === '/stats' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                Stats
              </Link>
            </nav>
            
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;