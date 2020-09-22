import React from "react";

export default function PubContent(props) {
  return (
    <div>
      {props.publications.map((publication) => {
        return (
          <div className="pub-card" type={publication.type}>
            <p>{publication.title}</p>
            {publication.publication.map((pub) => (
              <p>{pub}</p>
            ))}
            <p>{publication.url}</p>
          </div>
        );
      })}
    </div>
  );
}
