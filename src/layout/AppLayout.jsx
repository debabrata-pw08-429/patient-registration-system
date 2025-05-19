import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AppLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout; 