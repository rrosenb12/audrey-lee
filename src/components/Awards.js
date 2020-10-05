import React from "react";
import Footer from "./Footer";
import Years from "./Years";
import AwardContent from "./AwardContent";
import { awardsData } from "../data";

export default class Awards extends React.Component {
  YEARS = [2013, 2014, 2015, 2016, 2017, 2018, 2020];

  state = {
    year: 0,
  };

  getYear = (year) => {
    this.setState({
      year: year,
    });
  };

  getYearMobile = (e) => {
    this.setState({
      year: e.target.innerText,
    });
  };

  renderYear = () => {
    return (
      this.state.year !== 0 && (
        <AwardContent
          awards={
            awardsData[
              Object.keys(awardsData).filter((year) => this.state.year === year)
            ]
          }
        />
      )
    );
  };

  render() {
    return (
      <>
        <div className="awards-wrapper">
          <h1 className="awards-title">awards & recognitions</h1>
          <div className="carousel-wrapper">
            <Years getYear={this.getYear} years={this.YEARS} />
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
