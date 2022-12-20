import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App.js';
import {LogIn} from './components/Login.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    <LogIn/>
  </>
  // <React.StrictMode>
  //   <App />
  //   <button className='btn btn-warning'>Enviar</button>
  // </React.StrictMode>
);

reportWebVitals();
