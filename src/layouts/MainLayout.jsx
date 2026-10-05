import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-base text-primary">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
