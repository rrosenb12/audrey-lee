import React from "react";
import Years from "./Years";
import Footer from "./Footer";
import Y2016 from "./PubYears/y2016";
import Y2017 from "./PubYears/y2017";
import Y2018 from "./PubYears/y2018";
import Y2019 from "./PubYears/y2019";
import Y2020 from "./PubYears/y2020";

export default class Publications extends React.Component {
  state = {
    year: 0,
  };

  getYear = (year) => {
    this.setState({
      year: year,
    });
  };

  YEAR_TO_RENDER = {
    0: null,
    2016: <Y2016 />,
    2017: <Y2017 />,
    2018: <Y2018 />,
    2019: <Y2019 />,
    2020: <Y2020 />,
  };

  renderYear = () => {
    return <div>{this.YEAR_TO_RENDER[this.state.year]}</div>;
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
