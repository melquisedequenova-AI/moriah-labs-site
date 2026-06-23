import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import './moriah.css'
import './moriah-sections.css'

const isPortfolio = window.location.pathname === '/portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isPortfolio ? <PortfolioPage /> : <App />}
  </React.StrictMode>,
)
