import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.routes.map((route, key) => <Route key={key} {...route} />)}
        </main>
      </div>
    );
  }
}

Content.propTypes = {

};

export default Content;
