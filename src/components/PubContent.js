import React from "react";

export default function PubContent(props) {
  return (
    <div>
      {props.publications.map((publication) => {
        return (
          <div className="pub-card" type={publication.type}>
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              {publication.title}
            </a>
            {publication.publication.map((pub) => (
              <p>{pub}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
