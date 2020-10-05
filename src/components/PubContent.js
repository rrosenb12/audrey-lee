import React from "react";
import PubCard from "./PubCard";

export default function PubContent(props) {
  return (
    <div className="pub-cards-wrapper">
      {props.publications.map((publication) => (
        <PubCard publication={publication} />
      ))}
    </div>
  );
}
