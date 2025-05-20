import React, { useState, useEffect, useMemo } from 'react';
import { useDatabase } from '../context/DatabaseContext';
import { Repl } from '@electric-sql/pglite-repl';
import { SQL_QUERIES } from '../constants/sql-queries';

const THEME_STORAGE_KEY = 'sql-console-theme';

export default function SqlConsole() {
  const { db } = useDatabase();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  });
  const [showExamples, setShowExamples] = useState(false);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === 'dark';

  const replComponent = useMemo(() => (
    <Repl 
      key={theme} 
      pg={db}
      border={false}
      theme={theme}
    />
  ), [db, theme]);

  return (
    <div className={`p-4 space-y-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowExamples(!showExamples)}
            className={`text-sm px-3 py-1 rounded-md transition-colors ${
              isDark 
                ? 'text-indigo-400 hover:text-indigo-300 hover:bg-gray-800' 
                : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            {showExamples ? 'Hide Examples' : 'Show Examples'}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Theme:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className={`text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-200' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      <div className={`rounded-lg shadow-sm border overflow-hidden ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        {showExamples && (
          <div className={`p-4 border-b ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-sm font-medium mb-3 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Example Queries:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SQL_QUERIES.map(({ name, query, description }) => (
                <div 
                  key={name}
                  className={`rounded-md p-3 transition-colors ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`text-xs font-medium mb-1 ${
                    isDark ? 'text-gray-200' : 'text-gray-900'
                  }`}>{name}</div>
                  <div className={`text-xs mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{description}</div>
                  <div className={`text-xs font-mono p-2 rounded border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-gray-300' 
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}>
                    {query}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {replComponent}
      </div>
    </div>
  );
} 