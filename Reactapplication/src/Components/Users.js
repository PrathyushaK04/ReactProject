import React, { Component } from 'react';


class Users extends Component {
render() {
	return ( <table align="center">
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Emailid</th>
		</tr>
		<tbody> {
		this.props.users.map(userdetails)
		}</tbody>
		</table>);

function userdetails(element) {
	return (<tr><td>{element.Name}</td>
	<td>{element.Age}</td>
	<td>{element.Emailid}</td></tr>);
}

}
}
export default Users;