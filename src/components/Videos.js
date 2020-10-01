import React from "react";
import { NavLink } from "react-router-dom";

export default function Videos() {
  return (
    <>
      <div className="videos-wrapper">
        <NavLink to="/media">
          <button className="back-button">Back</button>
        </NavLink>
        <h1>videos</h1>
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPhiladelphiaAlumniWritersHouse%2Fvideos%2F1034940300211359%2F&show_text=0&width=560"
          width="560"
          height="315"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allowFullScreen="true"
          title="Audrey reading `Indiana, Hotter` for the Franklin & Marshall College WRiters House Social Distancing Salon, March 2020"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xiFEec0Q0xE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
          title="Audrey reading at the Episcopal Academy"
        ></iframe>
      </div>
    </>
  );
}
