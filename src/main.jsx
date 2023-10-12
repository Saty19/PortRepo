import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </React.StrictMode>,
)
