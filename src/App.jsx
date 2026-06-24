import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; 
import Home from "./pages/HomePage"
import Footer from './components/Sections/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}