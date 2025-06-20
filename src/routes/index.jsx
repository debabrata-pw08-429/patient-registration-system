import React from 'react';
import Home from '../pages/Home';

// Lazy load other pages for better performance
const About = React.lazy(() => import('../pages/About'));
const Docs = React.lazy(() => import('../pages/Docs'));
const DashboardLayout = React.lazy(() => import('../layout/DashboardLayout'));
const RegisterPatient = React.lazy(() => import('../pages/dashboard/RegisterPatient'));
const PatientRecords = React.lazy(() => import('../pages/dashboard/PatientRecords'));
const SqlConsolePage = React.lazy(() => import('../pages/dashboard/SqlConsolePage'));

export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home'
  },
  {
    path: '/about',
    element: About,
    title: 'About'
  },
  {
    path: '/docs',
    element: Docs,
    title: 'Documentation'
  },
  {
    path: '/dashboard/register',
    element: () => (
      <DashboardLayout>
        <RegisterPatient />
      </DashboardLayout>
    ),
    title: 'Register Patient'
  },
  {
    path: '/dashboard/records',
    element: () => (
      <DashboardLayout>
        <PatientRecords />
      </DashboardLayout>
    ),
    title: 'Patient Records'
  },
  {
    path: '/dashboard/sql-console',
    element: () => (
      <DashboardLayout>
        <SqlConsolePage />
      </DashboardLayout>
    ),
    title: 'SQL Console'
  }
]; 