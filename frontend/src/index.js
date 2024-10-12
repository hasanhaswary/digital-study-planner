import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';

// Check if we're in development mode and set the API base URL accordingly
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000' // Local backend URL
  : 'https://your-heroku-app.herokuapp.com'; // Production backend URL

// Pass the API URL as a global variable to your app
ReactDOM.render(
  <React.StrictMode>
    <App apiBaseUrl={API_BASE_URL} />
  </React.StrictMode>,
  document.getElementById('root')
);
