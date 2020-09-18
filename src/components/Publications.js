import React from "react";
import Years from "./Years";

export default class Publications extends React.Component {
  render() {
    return (
      <div className="publications-wrapper">
        <h1 className="publications-title">publications</h1>
        <div className="carousel-wrapper">
          <Years />
        </div>
      </div>
    );
  }
}
