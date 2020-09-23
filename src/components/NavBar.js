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
            <NavLink className="navbaritem" to="/publications">
              <p>Publications</p>
            </NavLink>
            <NavLink className="navbaritem" to="probably-angels">
              <p>Probably, Angels</p>
            </NavLink>
            <NavLink to="/">
              <h1 className="navbartitle">Audrey Lee</h1>
            </NavLink>
            <NavLink className="navbaritem" to="awards">
              <p>Awards & Recognitions</p>
            </NavLink>
            <NavLink className="navbaritem" to="/media">
              <p>Media</p>
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
