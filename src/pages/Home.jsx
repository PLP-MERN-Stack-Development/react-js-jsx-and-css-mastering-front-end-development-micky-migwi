import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="space-y-6">
      <Card title="Welcome">
        <p className="text-gray-700 dark:text-gray-300">
          This project demonstrates React component architecture, state management with hooks, routing, Tailwind CSS styling, and API integration.
        </p>
      </Card>
      <Card title="Get Started">
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Navigate to the Tasks page to manage your todos.</li>
          <li>Check the API page for fetched data with search and pagination.</li>
          <li>Use the button in the navbar to toggle dark and light themes.</li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
