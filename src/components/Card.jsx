import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
