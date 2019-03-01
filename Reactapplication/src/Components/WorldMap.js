import React, { Component } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import countries from "../helpers/countries.json";

import "./WorldMap.scss";

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      worldData: [],
    }
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }

  componentDidMount() {
    const worldData = countries;
      this.setState({
        worldData: feature(countries, countries.objects.countries).features,
      })
  }

  render() {
    return (
      <div className="worldMap">
        <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
          <g className="countries">
            {
              this.state.worldData.map((d,i) => (
                <path
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                  className="country"
                  fill="#AAAAAA"
                  stroke="#393f4d"
                  strokeWidth={ 1 }
                />
              ))
            }
          </g>
          <g className="markers">
            <circle
              cx={ this.projection()([8,48])[0] }
              cy={ this.projection()([8,48])[1] }
              r={ 5 }
              fill="red"
              className="marker"
            />
          </g>
        </svg>
      </div>
    )
  }
}

export default WorldMap
