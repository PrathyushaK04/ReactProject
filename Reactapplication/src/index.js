import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Components/Menu.js";
import "./Menu.css";

const routes = ["Dashboard","Users"];

ReactDOM.render(<Menu routes={routes} />, document.getElementById("index"));

