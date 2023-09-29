import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadastro from './pages/Cadastro/cadastro';
import Toolbar from './pages/Toolbar/toolbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toolbar/>
  </React.StrictMode>
);

