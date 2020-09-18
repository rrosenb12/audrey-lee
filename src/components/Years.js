import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class Years extends React.Component {
  render() {
    return (
      <Carousel
        slidesPerPage={5}
        slidesPerScroll={2}
        animationSpeed={1500}
        offset={1}
        itemWidth={200}
        clickToChange
        centered
      >
        <p className="year">2016</p>
        <p className="year">2017</p>
        <p className="year">2018</p>
        <p className="year">2019</p>
        <p className="year">2020</p>
      </Carousel>
    );
  }
}
