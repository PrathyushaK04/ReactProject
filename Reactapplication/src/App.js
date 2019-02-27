import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainNavigation from './Components/MainNavigation.js';
import Content from './Components/Content.js';

import {routes} from './routes.js';
import './styles/app.css';
import './styles/table.css';


class App extends Component {

  render() {
    return (
      <div className="main">
        <MainNavigation routes={routes}/>
        <Content routes={routes}/>
      </div>
    );
  }
}

export default App;
