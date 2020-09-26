import React from "react";
import Years from "./Years";
import Footer from "./Footer";
import { pubData } from "../data";
import PubContent from "./PubContent";

export default class Publications extends React.Component {
  YEARS = [2016, 2017, 2018, 2019, 2020];

  state = {
    year: 0,
  };

  getYear = (year) => {
    this.setState({
      year: year,
    });
  };

  getYearMobile = (e) => {
    this.setState(
      {
        year: e.target.innerText,
      },
      () => console.log(this.state.year)
    );
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
          <div className="years-wrapper">
            {this.YEARS.map((year) => (
              <button
                className="year-button"
                key={year}
                onClick={this.getYearMobile}
              >
                {year}
              </button>
            ))}
          </div>
          {this.renderYear()}
        </div>
        <Footer />
      </>
    );
  }
}
