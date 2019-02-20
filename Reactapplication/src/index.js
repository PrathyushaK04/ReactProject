import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Components/Menu.js";
import Users from "./Components/Users.js";
import Registration from "./Components/Registration.js";
import "./Menu.css";

const routes = ["Dashboard","Users"];

const users = [{ Name: 'sahana' , Age: 0.3, Emailid: 'sahana@abc.com' },
               { Name: 'Laasi' , Age: 5, Emailid: 'laasi@abc.com' },
               { Name: 'Haasi' , Age: 11, Emailid: 'haasi@abc.com' }];


ReactDOM.render(<div>  <Menu routes={routes} />
	<section className="itemslist"><Users users={users}/></section>
	<section><Registration /></section>
	                 
	                </div>, document.getElementById("index"));

 