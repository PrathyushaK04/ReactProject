import React, { Component } from 'react';
import "./Registration.css";

class Registration extends Component {
	render() {
		
		return( <div className="registerform">
			First Name: <input type="text" />
			Last Name: <input type="text" />
			Email ID: <input type="text" />
			Password: <input type="password" />
			</div>
			);

	
	}

}
export default Registration;