import React from 'react';
import Home from '../pages/Home';

// Lazy load other pages for better performance
const About = React.lazy(() => import('../pages/About'));
const Docs = React.lazy(() => import('../pages/Docs'));

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
  }
]; 