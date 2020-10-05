import React from "react";

export default class Pubcard extends React.Component {
  state = {
    showAlert: false,
  };

  render() {
    return (
      <div className="pub-card" type={this.props.publication.type}>
        {this.props.publication.url === "PRINT ONLY" ? (
          <>
            {this.state.showAlert ? (
              <p className="alert">
                Sorry, this publication is only available in print
              </p>
            ) : null}
            <h1
              className="pub-title-p-tag"
              onClick={() =>
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
                  ? this.setState((previousState) => {
                      return { showAlert: !previousState.showAlert };
                    })
                  : window.alert(
                      "Sorry, this publication is only available in print"
                    )
              }
            >
              {this.props.publication.title}
            </h1>
          </>
        ) : (
          <a
            className="pub-title"
            href={this.props.publication.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{this.props.publication.title}</h1>
          </a>
        )}
        {this.props.publication.publication.map((pub) => (
          <p className="pub-name">{pub}</p>
        ))}
      </div>
    );
  }
}
