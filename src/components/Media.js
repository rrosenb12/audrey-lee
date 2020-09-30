import React from "react";
import Footer from "./Footer";
import author from "../media/author.JPG";
import desales from "../media/desales.JPG";
import maverick from "../media/maverick.JPG";
import studentoftheweek from "../media/studentoftheweek.JPG";
import { NavLink } from "react-router-dom";

export default function Media() {
  return (
    <>
      <div className="media-page-wrapper">
        <div className="media-page-left">
          <div className="img-alt-wrap">
            <img
              src={author}
              alt="Audrey with author Caitlin Horrocks, judge of the 2020 Jerome Irving Bank Prize"
            />
            <p className="alt-p">
              Audrey with author Caitlin Horrocks, judge of the 2020 Jerome
              Irving Bank Prize
            </p>
          </div>
          <div className="img-alt-wrap">
            <img src={desales} alt="Audrey reading at DeSales University" />
            <p className="alt-p">Audrey reading at DeSales University</p>
          </div>
        </div>
        <div className="media-page-center">
          <h1>Please Select</h1>
          <div className="media-button-wrapper">
            <NavLink to="/media/videos">
              <button className="media-button">Videos</button>
            </NavLink>
            <NavLink to="/media/interviews">
              <button className="media-button">Interviews</button>
            </NavLink>
          </div>
        </div>
        <div className="media-page-right">
          <div className="img-alt-wrap">
            <img
              src={maverick}
              alt="Audrey reading at Maverick Duck Press's `A Poetry Tempest` at Evermore Coffee Roasters"
            />
            <p className="alt-p">
              Audrey reading at Maverick Duck Press's `A Poetry Tempest` at
              Evermore Coffee Roasters
            </p>
          </div>
          <div className="img-alt-wrap">
            <img
              src={studentoftheweek}
              alt="Audrey for Main Line Student of the Week"
            />
            <p className="alt-p">Audrey for Main Line Student of the Week</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
