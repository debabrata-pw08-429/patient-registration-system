import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import { routes } from './routes';
import './index.css';

function AppRoutes() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    }>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route
            key={path}
            path={path}
            element={
              isDashboard
                ? <Element />
                : <AppLayout><Element /></AppLayout>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
