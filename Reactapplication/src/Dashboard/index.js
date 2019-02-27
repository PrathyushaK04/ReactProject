import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WorldMap from '../Components/WorldMap.js';

class Index extends Component {
  render() {
    return (
      <div>
        <WorldMap/>
      </div>
    );
  }
}

Index.propTypes = {

};

export default Index;