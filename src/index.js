import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);