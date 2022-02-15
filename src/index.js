import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {StateProvider} from './components/StateProvider'
import reducer, {initialState} from './components/reducer'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    {/* so that every component can get access to data layer */}
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
    <App />
    </Router>

    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
