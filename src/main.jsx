import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import AuthContextProvider from './component/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider><RouterProvider router={Router} /></AuthContextProvider>
  </React.StrictMode>,
)
