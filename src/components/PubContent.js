import React from "react";

export default function PubContent(props) {
  return (
    <div className="pub-cards-wrapper">
      {props.publications.map((publication) => {
        return (
          <div className="pub-card" type={publication.type}>
            <a
              className="pub-title"
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {publication.title}
            </a>
            {publication.publication.map((pub) => (
              <p className="pub-pub">{pub}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
