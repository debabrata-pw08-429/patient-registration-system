import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  const navigation = [
    {
      name: 'Register Patient',
      path: '/dashboard/register',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      name: 'Patient Records',
      path: '/dashboard/records',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <div className={`h-screen bg-white shadow-lg ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="p-4">
        <nav className="space-y-2 mt-12">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center ${isCollapsed ? 'justify-center' : ''} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
              title={isCollapsed ? item.name : ''}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </div>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 