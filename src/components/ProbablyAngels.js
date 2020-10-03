import React from "react";
import probablyAngels from "../media/probably-angels.png";
import Footer from "./Footer";

export default function ProbablyAngels() {
  return (
    <>
      <div className="probably-angels-wrapper">
        <p>
          Probably, Angels is the first collection of poetry from Audrey Lee,
          published by Maverick Duck Press. Probably, Angels documents the
          culmination of girlhood into becoming a woman, and the different forms
          of loving we associate with ourselves and those around us. It was
          released on May 1st, 2020. You can purchase it{" "}
          <a
            href="http://www.maverickduckpress.com/probably_angels.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          className="probably-angels-cover"
          src={probablyAngels}
          alt="cover illustration for Audrey's book, <i>Probably Angels</i>"
        />
      </div>
      <Footer/>
    </>
  );
}
