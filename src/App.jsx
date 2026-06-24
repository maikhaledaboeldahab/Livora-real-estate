import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; 
import Home from "./pages/HomePage"
import Footer from './components/Sections/Footer/Footer';
import MessageIcon from './components/UI/MessageIcon/MessageIcon';

export default function App() {
  return (
    <BrowserRouter>
      <Home/>
      <MessageIcon/>
      <Footer/>
    </BrowserRouter>
  );
}