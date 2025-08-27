import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Copyright from '../../components/Copyright/Copyright';

export default function MainLayout() {
  const {pathname} = useLocation();
  return (
    <>
      <Navbar />
      <div className={`center min-h-dvh ${pathname==='/' || pathname==='/about' ? 'bg-primary': ''}`}>
        <div className="container text-center">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Copyright/>
    </>
  );
}
