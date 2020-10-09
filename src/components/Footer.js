import facebookglpyh from "../glyphs/facebook.svg";
import twitterglyph from "../glyphs/twitter.svg";
import instaglyph from "../glyphs/instagram.svg";
import linkedinglyph from "../glyphs/linkedin.svg";
import emailglyph from "../glyphs/email.png";
import htmlglyph from "../glyphs/html.png";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/people/Audrey-Lee/100007050735775"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="contactglyph" src={facebookglpyh} alt="facebook icon" />
      </a>
      <a
        href="https://twitter.com/audreyyllee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="contactglyph" src={twitterglyph} alt="twitter icon" />
      </a>
      <a
        href="http://instagram.com/audreyyllee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="contactglyph" src={instaglyph} alt="instagram icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/audreymorganlee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="contactglyph" src={linkedinglyph} alt="linkedin icon" />
      </a>
      <a
        href="mailto:alee3@fandm.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="contactglyph"
          id="emailglyph"
          src={emailglyph}
          alt="email icon"
        />
      </a>
      <a
        href="mailto:rebecca.ap.rosenberg@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="contactglyph" src={htmlglyph} alt="html icon" />
      </a>
    </div>
  );
}
