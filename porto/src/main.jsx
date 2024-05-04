import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioHead, PortfolioBody, PortfolioFooter } from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioHead />
    <PortfolioBody />
    <PortfolioFooter />
  </React.StrictMode>
);
