import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './serviceWorkerRegistration';
import { BrowserRouter } from "react-router-dom"
import "./assets/styles/base.all.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
