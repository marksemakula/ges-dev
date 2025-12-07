import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CMSProvider } from './cms/CMSProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CMSProvider>
        <App />
      </CMSProvider>
    </BrowserRouter>
  </StrictMode>
);