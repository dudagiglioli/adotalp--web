import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Toolbar from './pages/Toolbar/toolbar';
import Cadastro from './pages/Cadastro/cadastro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toolbar/>
    <Cadastro/>
  </React.StrictMode>
); 