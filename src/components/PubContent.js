import React from "react";

export default function PubContent(props) {
  return (
    <div className="pub-cards-wrapper">
      {props.publications.map((publication) => {
        return (
          <div className="pub-card" type={publication.type}>
            {publication.url === "PRINT ONLY" ? (
              <p
                className="pub-title-p-tag"
                onClick={() =>
                  window.alert(
                    "Sorry, this publication is only available in print"
                  )
                }
              >
                {publication.title}
              </p>
            ) : (
              <a
                className="pub-title"
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.title}
              </a>
            )}
            {publication.publication.map((pub) => (
              <p className="pub-name">{pub}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
