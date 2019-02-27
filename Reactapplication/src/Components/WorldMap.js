import React, { Component } from 'react';
const d3 = require('d3');

class WorldMap extends Component {

  render() {
    const width = 960;
    const height = 500;
    
    const projection = d3.geoMercator()
      .scale(width / 2 / Math.PI)
      //.scale(100)
      .translate([width / 2, height / 2])
    const path = d3.geoPath()
      .projection(projection);
    const url = "http://enjalot.github.io/wwsd/data/world/world-110m.geojson";
    let data = null;
    d3.json(url, function(err, geojson) {
      data = geojson;
    });

    return (
      <div ref={(mapWrap) => this.mapWrap = mapWrap}>
        <svg ref={(node) => this.svg = node}>
          <path d={path(data)}/>
        </svg>
      </div>
    );
  }
}

export default WorldMap;
