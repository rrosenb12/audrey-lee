import React from "react";
import Footer from "./Footer";
import Years from "./Years"

export default class Awards extends React.Component {
  YEARS=[2013, 2014, 2015, 2016, 2017, 2018, 2020]

  state = {
    year: 0,
  };

  getYear = (year) => {
    this.setState({
      year: year,
    });
  };

  render() {
    return (
      <>
      <div className="carousel-wrapper">
        <Years getYear={this.getYear} years={this.YEARS}/>
      </div>
        <div className="awards-wrapper">
          <h1>hi</h1>
        </div>
        <Footer />
      </>
    );
  }
}
