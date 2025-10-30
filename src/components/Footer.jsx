import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
            <a href="https://react.dev/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">React</a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Tailwind</a>
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Vite</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
