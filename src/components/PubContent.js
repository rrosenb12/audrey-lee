import React from "react";

export default function PubContent(props) {
  return (
    <div className="pub-cards-wrapper">
      {props.publications.map((publication) => {
        return (
          <div className="pub-card" type={publication.type}>
            {publication.url === "PRINT ONLY" ? (
              <h1
                className="pub-title-p-tag"
                onClick={() =>
                  // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  //   navigator.userAgent
                  // )
                  //   ? console.log("mobile")
                  //   : window.alert(
                  //       "Sorry, this publication is only available in print"
                  //     )
                  window.alert(
                    "Sorry, this publication is only available in print"
                  )
                }
              >
                {publication.title}
              </h1>
            ) : (
              <a
                className="pub-title"
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>
                {publication.title}
                </h1>
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
