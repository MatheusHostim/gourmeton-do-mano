import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Se você tiver estilos globais ou importações

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
