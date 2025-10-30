import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              PLP Task Manager
            </Link>
            <div className="hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link to="/tasks" className="hover:text-blue-600 dark:hover:text-blue-400">Tasks</Link>
              <Link to="/api" className="hover:text-blue-600 dark:hover:text-blue-400">API</Link>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
