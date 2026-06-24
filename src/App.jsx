import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; 
import Navbar from './components/Sections/Navbar/Navbar';
import Footer from './components/Sections/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}