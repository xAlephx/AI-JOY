import React from 'react';
import './styles/main.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Layout from './components/Layout';
import Careers from './components/Careers';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Privacy from './components/Privacy';
import TermsOfUse from './components/TermsOfUse';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/termsOfUse' element={<TermsOfUse />} />
        </Route>
      </Routes>
    </>
  );
}
