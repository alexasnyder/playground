import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import history from './services/history';
import GA4React, {useGA4React} from 'ga-4-react';

const ga4react = new GA4React("G-RTQCDE3CFS");

(async () => {
  await ga4react.initialize().then(ga => {
    ga.pageview('home');
  });

  ReactDOM.render(
    <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
