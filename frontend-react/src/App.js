import React from 'react';
import logo from './logo.svg';
import logogo from './logo-go.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="retro-topbar">
        <div className="status-indicator">
          <span className="blinking-dot"></span>
          <span className="status-text">API GO // ONLINE :8000</span>
        </div>
        <div className="retro-system-info">
          <span>SISTEMA: GORM + POSTGRESQL</span>
        </div>
        <div className="retro-loc-info">
          <span>BELÉM - PA // BR</span>
        </div>
      </div>

      <header className="App-header">
        <div className="logo-container">
          <img src={logogo} className="App-logo go-logo" alt="Logo Go" />
          <div className="logo-separator">+</div>
          <img src={logo} className="App-logo react-logo" alt="Logo React" />
        </div>

        <div className="title-wrapper">
          <span className="retro-badge">ARQUIVO HISTÓRICO // REST API</span>
          <h1 className="retro-title">PERSONALIDADES</h1>
          <p className="retro-subtitle">HISTÓRIA & MEMÓRIA DE BELÉM DO PARÁ</p>
        </div>

        <div className="retro-divider">
          <span className="divider-line"></span>
          <span className="divider-coin">★ INSERT COIN TO EXPLORE ★</span>
          <span className="divider-line"></span>
        </div>
      </header>
    </div>
  );
}

export default App;
