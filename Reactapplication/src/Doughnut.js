import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DonutChart from "react-svg-donut-chart";
import "./Doughnut.css";
import * as d3 from 'd3';

var users = [//<- missing bracket 
    {
      "Type": "Known",
      "count": "246",
    }, {
      "Type": "Unknown",
      "count": "40",
    }
  ];
  // color range
var color = d3.scaleOrdinal()
    .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2"]);

class Doughnut extends Component {


	componentDidMount() {

// margin
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/4;




// donut chart arc
var arc = d3.arc()
    .outerRadius(radius - 20)
    .innerRadius(radius - 50);


// generate pie chart and donut chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });


// define the svg donut chart
var svg = d3.select(".dough").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    // "g element is a container used to group other SVG elements"
  var g = svg.selectAll(".arc")
      .data(pie(users))
    .enter().append("g")
      .attr("class", "arc");

   // append path 
  g.append("path")
      .attr("d", arc)
      .style("fill", function(d,i) { return color(i); });
        


	}
  render() {
  
    return (
      <div className = "dough">   
      </div>
    );
  }
}

export default Doughnut;