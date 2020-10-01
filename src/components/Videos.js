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
        <div
          class="fb-video"
          data-href="https://www.facebook.com/PhiladelphiaAlumniWritersHouse/videos/1034940300211359"
          data-allowfullscreen="true"
          data-width="300"
        ></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xiFEec0Q0xE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Audrey reading at the Episcopal AcademyW"
        ></iframe>
      </div>
    </>
  );
}
