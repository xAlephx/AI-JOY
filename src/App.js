import React from 'react';
import './styles/main.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Careers from './components/pages/Careers';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Privacy from './components/pages/Privacy';
import TermsOfUse from './components/pages/TermsOfUse';
import Error from './components/pages/Error';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/careers', element: <Careers /> },
      { path: '/aboutUs', element: <AboutUs /> },
      { path: '/contactUs', element: <ContactUs /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/termsOfUse', element: <TermsOfUse /> },
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
