import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MainNavigation.css';

class MainNavigation extends Component {
  render() {
    return (
      <aside className="navigation">
        {this.props.routes.map(this.renderLink, this)}
      </aside>
    );
  }

  renderLink(route, key) {
    return (
      <NavLink
        key={key}
        to={route.path}
        className="link"
      >
        {route.label}
      </NavLink>
    );
  }

}

MainNavigation.propTypes = {

};

export default MainNavigation;