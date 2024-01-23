import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.scss';
import original from "react95/dist/themes/original";
import { ThemeProvider } from "styled-components";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <ThemeProvider theme={original}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
