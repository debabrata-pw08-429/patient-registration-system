import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-indigo-500 text-white">
        {icon}
      </div>
      <div className="ml-14 sm:ml-16">
        <h3 className="text-base sm:text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard; 