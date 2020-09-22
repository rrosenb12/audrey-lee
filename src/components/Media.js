import React from "react";
import Footer from "./Footer";
import author from "../media/author.JPG";
import desales from "../media/desales.JPG";
import maverick from "../media/maverick.JPG";
import studentoftheweek from "../media/studentoftheweek.JPG";

export default function Media() {
  return (
    <>
      <div className="media-page-wrapper">
        <img
          src={author}
          alt="Audrey with author Caitlin Horrocks, judge of the 2020 Jerome Irving Bank Prize"
        />
        <img src={desales} alt="Audrey reading at DeSales University" />
        <img
          src={maverick}
          alt="Audrey reading at Maverick Duck Press's `A Poetry Tempest` at Evermore Coffee Roasters"
        />
        <img
          src={studentoftheweek}
          alt="Audrey for Main Line Student of the Week"
        />
      </div>
      <Footer />
    </>
  );
}
