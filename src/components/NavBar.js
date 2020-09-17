import React from "react";
import { NavLink } from "react-router-dom";
import ddbutton from "../glyphs/ddbutton.png";

export default class NavBar extends React.Component {
  state = {
    rotate: false,
  };

  clickHandler = () => {
    this.setState((previousState) => {
      return {
        rotate: !previousState.rotate,
      };
    });
  };

  render() {
    return (
      <>
        <div className="navbarrow">
          <div className="navbar">
            <NavLink to="/publications">
              <p className="navbaritem">Publications</p>
            </NavLink>
            <NavLink to="probably-angels">
              <p className="navbaritem">Probably, Angels</p>
            </NavLink>
            <NavLink to="/">
              <h1 className="navbartitle">Audrey Lee</h1>
            </NavLink>
            <NavLink to="awards">
              <p className="navbaritem">Awards & Recognitions</p>
            </NavLink>
            <NavLink to="media">
              <p className="navbaritem">Media</p>
            </NavLink>
          </div>
        </div>

        <div className="smallnavbarrow">
          <img
            src={ddbutton}
            alt="ddbutton"
            onClick={this.clickHandler}
            id="ddbutton"
            className={this.state.rotate ? "rotate" : ""}
            height="50"
          />
          <div className="titlewrapper">
            <NavLink to="/">
              <h1 className="navbartitle">Audrey Lee</h1>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}
