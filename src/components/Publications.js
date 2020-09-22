import React from "react";
import Years from "./Years";
import Footer from "./Footer";
import { pubData } from "../data";
import PubContent from "./PubContent";

export default class Publications extends React.Component {
  state = {
    year: 0,
  };

  getYear = (year) => {
    this.setState({
      year: year,
    });
  };

  renderYear = () => {
    return (
      this.state.year !== 0 && (
        <PubContent
          publications={
            pubData[
              Object.keys(pubData).filter((year) => this.state.year === year)
            ]
          }
        />
      )
    );
  };

  render() {
    return (
      <>
        <div className="publications-wrapper">
          <h1 className="publications-title">publications</h1>
          <div className="carousel-wrapper">
            <Years getYear={this.getYear} />
          </div>
          {this.renderYear()}
        </div>
        <Footer />
      </>
    );
  }
}
