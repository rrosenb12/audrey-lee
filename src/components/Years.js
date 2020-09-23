import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class Years extends React.Component {
  clickHandler = (e) => {
    this.props.getYear(e.target.id);
  };

  render() {
    return (
      <Carousel
        slidesPerPage={5}
        slidesPerScroll={3}
        animationSpeed={1500}
        offset={1}
        itemWidth={200}
        clickToChange
        centered
        breakpoints={{
          758: {
            slidesPerPage: 5,
            slidesPerScroll: 3,
            clickToChange: true,
            centered: false
          }
        }}
      >
        <p className="carousel-start">
          <strong>drag me...</strong>
        </p>
        <p id="2016" className="year" onClick={this.clickHandler}>
          2016
        </p>
        <p id="2017" className="year" onClick={this.clickHandler}>
          2017
        </p>
        <p id="2018" className="year" onClick={this.clickHandler}>
          2018
        </p>
        <p id="2019" className="year" onClick={this.clickHandler}>
          2019
        </p>
        <p id="2020" className="year" onClick={this.clickHandler}>
          2020
        </p>
      </Carousel>
    );
  }
}
