import React from 'react';
import Header from '@/components/Header'; // ✅ use your Header component
import Footer from '@/components/Footer'; // ✅ use your Footer component
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20"> {/* Adjust if your header is fixed */}
        <Outlet /> {/* Child route content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
