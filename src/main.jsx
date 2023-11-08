import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './index.css';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Router>
        <App/>
        </Router>
    </BrowserRouter>
  </React.StrictMode>
);
