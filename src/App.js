import React from 'react';
import './styles/main.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Careers from './components/pages/Careers';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Privacy from './components/pages/Privacy';
import TermsOfUse from './components/pages/TermsOfUse';
import Error from './components/pages/Error';

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
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
