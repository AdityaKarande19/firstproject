import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogRocket from 'logrocket';

LogRocket.init('wsh7l2/testproject');
LogRocket.identify('wsh7l2/testproject', {
  name: 'Aditya',
  email: 'adityakarande681@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
