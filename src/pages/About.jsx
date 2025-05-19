import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About MediSync 
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          A modern, offline-ready solution for managing patient records with real-time synchronization.
        </p>
      </div>
      <div className="mt-12">
        <div className="prose prose-indigo prose-lg mx-auto">
          <p>
            MediSync  is designed to provide healthcare professionals with a reliable and efficient way to manage patient records.
            Our platform ensures data availability even in offline scenarios while maintaining synchronization across multiple devices.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>Offline-first architecture</li>
            <li>Real-time synchronization</li>
            <li>Secure data storage</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About; 