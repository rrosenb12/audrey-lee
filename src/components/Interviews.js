import React from "react";
import Footer from "./Footer";
import { interviewData } from "../data";

export default function Interviews() {
  return (
    <>
      <h1>Interviews</h1>
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
