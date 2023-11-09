import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';


const router = createBrowserRouter([
  {
    path: '/PortRepo/',
    element: <App/>,
  },
  {
    path:'/PortRepo/contact',
    element:<ContactUs/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
