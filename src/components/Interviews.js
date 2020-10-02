import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { interviewData } from "../data";

export default function Interviews() {
  return (
    <>
      <div className="interviews-top">
        <div className="button-wrapper">
          <NavLink to="/media">
            <button className="back-button">Back</button>
          </NavLink>
        </div>
        <h1 className="interviews-title">Interviews</h1>
      </div>
      <div className="interviews-wrapper">
        {interviewData.map((interview) => (
          <div className="interview-card">
            <a href={interview.url} target="_blank" rel="noopener noreferrer">
              <h1>{interview.title}</h1>
            </a>
            <h5>{interview.interviewer}</h5>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
