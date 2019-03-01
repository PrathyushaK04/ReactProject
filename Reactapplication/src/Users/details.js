import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    return (
      <div className=''>
        <h2>User Details</h2>
        <div className='form'>
          <label>First Name</label>
          <input type='text'/>
          <label>Last Name</label>
          <input type='text'/>
          <label>User Name</label>
          <input type='text'/>
          <label>Email</label>
          <input type='text'/>
          <label>Password</label>
          <input type='password'/>
          <label>Confirm Password</label>
          <input type='password'/>
          </div>
     </div>
    );
  }
}

Details.propTypes = {

};

export default Details;