import React from "react";
import Footer from "./Footer";
import author from "../media/author.JPG";
import desales from "../media/desales.JPG";
import maverick from "../media/maverick.JPG";
import studentoftheweek from "../media/studentoftheweek.JPG";
import Interviews from './Interviews'
import Videos from './Videos'

export default class Media extends React.Component {
  state = {
    mediaType: "none",
  };

  resetMedia = () => {
    console.log("hello")
  }

  renderMediaPageCenter = () => {
    if (this.state.mediaType === "none") {
      return (
        <>
          <h1>Please Select</h1>
          <div className="media-button-wrapper">
            <button
              className="media-button"
              onClick={() => {
                this.setState({
                  mediaType: "videos",
                });
              }}
            >
              Videos
            </button>
            <button
              className="media-button"
              onClick={() => {
                this.setState({
                  mediaType: "interviews",
                });
              }}
            >
              Interviews
            </button>
          </div>
        </>
      );
    } else if (this.state.mediaType === 'videos') {
      return <Videos />
    } else if (this.state.mediaType === 'interviews') {
      return <Interviews />
    }
  };

  render() {
    console.log(this.state.mediaType);
    return (
      <>
        <div className="media-page-wrapper">
          <div className="media-page-left">
            <div className="img-alt-wrap">
              <img
                src={author}
                alt="Audrey with author Caitlin Horrocks, judge of the 2020 Jerome Irving Bank Prize"
              />
              <p className="alt-p">
                Audrey with author Caitlin Horrocks, judge of the 2020 Jerome
                Irving Bank Prize
              </p>
            </div>
            <div className="img-alt-wrap">
              <img src={desales} alt="Audrey reading at DeSales University" />
              <p className="alt-p">Audrey reading at DeSales University</p>
            </div>
          </div>
          <div className="media-page-center">
            {this.renderMediaPageCenter()}
          </div>
          <div className="media-page-right">
            <div className="img-alt-wrap">
              <img
                src={maverick}
                alt="Audrey reading at Maverick Duck Press's `A Poetry Tempest` at Evermore Coffee Roasters"
              />
              <p className="alt-p">
                Audrey reading at Maverick Duck Press's `A Poetry Tempest` at
                Evermore Coffee Roasters
              </p>
            </div>
            <div className="img-alt-wrap">
              <img
                src={studentoftheweek}
                alt="Audrey for Main Line Student of the Week"
              />
              <p className="alt-p">Audrey for Main Line Student of the Week</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
