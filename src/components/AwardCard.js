import React from "react";

export default class AwardCard extends React.Component {
  render() {
    return (
      <div className="award-card">
        <ul>
          {this.props.award.type}
          {this.props.award.details.length !== 0 &&
            this.props.award.details.map((detail) => <li>{detail}</li>)}
          {this.props.award.url !== "none" && (
            <a
              href={this.props.award.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Read more</li>
            </a>
          )}
        </ul>
      </div>
    );
  }
}
