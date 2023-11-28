import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: '/PortRepo/',
    element: <App />,
  },
  {
    path: '/PortRepo/contact',
    element: <ContactUs />,
  },
  {
    path: '*', // Wildcard route for unmatched paths
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
