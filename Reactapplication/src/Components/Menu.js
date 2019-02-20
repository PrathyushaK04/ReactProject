import React, { Component } from 'react';
import Users from "./Users.js";
import ReactDOM from "react-dom";


class Menu extends Component {

render() {
	const routes = this.props.routes;
    return ( <ul className="menuul"> {
  	         this.props.routes.map(routesnames)
             } </ul> );

  function routesnames(element) {   
  	return (<li onClick={MenuContent.bind({element})}><a>{element}</a></li>);	 
  }
  	function MenuContent() {
  		const e = this.element;
  		if(e == 'Users') {
  			console.log("users");
  		return (ReactDOM.render(<p>hii</p>, document.getElementById("showhere")));
  	 }
  	else {
  		return (ReactDOM.render(<p>No content</p>, document.getElementById("showhere")));
  	}
  	}

}
}
export default Menu;

