import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history.js';

import App from './App.js';


ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>
  , document.getElementById('app'));
