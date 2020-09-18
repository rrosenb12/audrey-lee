import React from "react";
import Years from "./Years";

export default class Publications extends React.Component {
  render() {
    return (
      <div className="publications-wrapper">
        <div className="carousel-wrapper">
          <Years />
        </div>
      </div>
    );
  }
}
