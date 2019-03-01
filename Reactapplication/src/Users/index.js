import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

import List from './List.js';
import Details from './Details.js';

class Index extends Component {
  render() {
    return (
		<div>
			<Route 
				path="/users"
				component={List}
			/>
			<Route 
				path="/users/create"
				component={Details}
			/>
		</div>
    );
  }
}

Index.propTypes = {

};

export default Index;