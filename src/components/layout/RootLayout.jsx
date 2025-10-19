import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer'; // create this if you don’t have one

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
