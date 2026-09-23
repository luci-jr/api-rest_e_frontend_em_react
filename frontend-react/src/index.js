import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Personalidades from './components/Personalidades';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Personalidades />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se tu quiseres começar a medir a performance no teu app, passa uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envia para um endpoint de telemetria/analytics. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
