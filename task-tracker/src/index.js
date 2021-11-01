import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  //Inject App component into the root div in index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
