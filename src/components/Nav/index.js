import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="hero-head">
        <nav
          className="navbar is-fixed-top has-background-black is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to={"/"} className="navbar-item">
                <span className="hvr-float ">S</span>
                <span className="hvr-float ">c</span>
                <span className="hvr-float ">h</span>
                <span className="hvr-float ">e</span>
                <span className="hvr-float ">d</span>
                <span className="hvr-float ">u</span>
                <span className="hvr-float ">l</span>
                <span className="hvr-float ">i</span>
                <span className="hvr-float ">z</span>
                <span className="hvr-float ">e</span>
              </Link>

              <a
                href
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div
              id="navbarBasicExample"
              className="navbar-menu has-background-black"
            >
              <div className="navbar-end has-text-centered ">
                <Link to={"/"} className="navbar-item">
                  <span className="hvr-float ">H</span>
                  <span className="hvr-float ">o</span>
                  <span className="hvr-float ">m</span>
                  <span className="hvr-float ">e</span>
                </Link>
                <Link to={"/team"} className="navbar-item">
                  <span className="hvr-float ">T</span>
                  <span className="hvr-float ">e</span>
                  <span className="hvr-float ">a</span>
                  <span className="hvr-float ">m</span>
                </Link>
                <Link to={"/pricing"} className="navbar-item">
                  <span className="hvr-float ">P</span>
                  <span className="hvr-float ">r</span>
                  <span className="hvr-float ">i</span>
                  <span className="hvr-float ">c</span>
                  <span className="hvr-float ">i</span>
                  <span className="hvr-float ">n</span>
                  <span className="hvr-float ">g</span>
                </Link>
                {/* <Link to={"/contact"} className="navbar-item">
                  <span className="hvr-float ">C</span>
                  <span className="hvr-float ">o</span>
                  <span className="hvr-float ">n</span>
                  <span className="hvr-float ">t</span>
                  <span className="hvr-float ">a</span>
                  <span className="hvr-float ">c</span>
                  <span className="hvr-float ">t</span>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
