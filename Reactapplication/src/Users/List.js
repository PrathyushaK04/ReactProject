import React, { Component } from 'react';
import PropTypes from 'prop-types';

const users = [{
  name: 'John',
  userName: 'John2',
  email: 'john2@gmail.com'
}, {
  name: 'Craig',
  userName: 'Craig',
  email: 'craig@gmail.com'
}, {
  name: 'Bob',
  userName: 'Bob9',
  email: 'bob9@gmail.com'
}];

class List extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      users: users
    }
  }

  render() {
    const users = this.state.users;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(this.renderRow, this)}
        </tbody>
      </table>
    );
  }

  renderRow(user, index) {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
      </tr>
    )
  }
}

List.propTypes = {

};

export default List;