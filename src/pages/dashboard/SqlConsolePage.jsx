import React from 'react';
import SqlConsole from '../../components/SqlConsole';

export default function SqlConsolePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">SQL Console</h1>
      <div className="bg-white rounded-lg shadow">
        <SqlConsole />
      </div>
    </div>
  );
} 