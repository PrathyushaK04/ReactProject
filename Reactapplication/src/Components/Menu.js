import React, { Component } from 'react';


class Menu extends Component {
render() {
	const routes = this.props.routes;
    return ( <ul className="menuul"> {
  	         this.props.routes.map(routesnames)
             } </ul> );

  function routesnames(element) {
  	return (<li><a href="#">{element}</a></li>);	
  }

}
}
export default Menu;

