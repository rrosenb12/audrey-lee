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
        {this.props.years.map(year => 
          <p id={year} key={year} className="year" onClick={this.clickHandler}>{year}</p>
        )}
      </Carousel>
    );
  }
}
