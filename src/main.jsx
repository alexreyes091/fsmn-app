import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
// Local
import App from './App.jsx'
import './index.css'
// Theme
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main>
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
