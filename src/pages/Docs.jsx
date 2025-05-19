import React from 'react';

function Docs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Documentation
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Learn how to use MediSync  effectively
        </p>
      </div>
      <div className="mt-12">
        <div className="prose prose-indigo prose-lg mx-auto">
          <h2>Getting Started</h2>
          <p>
            Welcome to the MediSync  documentation. This guide will help you understand how to use our platform effectively.
          </p>
          
          <h3>Quick Start Guide</h3>
          <ol>
            <li>Register a new patient</li>
            <li>View and manage patient records</li>
            <li>Work offline with automatic sync</li>
            <li>Collaborate with team members</li>
          </ol>

          <h2>Features</h2>
          <h3>Offline Support</h3>
          <p>
            MediSync  works seamlessly offline. All changes are automatically synchronized when you're back online.
          </p>

          <h3>Real-time Sync</h3>
          <p>
            Changes are synchronized in real-time across all your devices and browser tabs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Docs; 