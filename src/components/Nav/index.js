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
                <span className="hvr-float is-desktop">S</span>
                <span className="hvr-float is-desktop">c</span>
                <span className="hvr-float is-desktop">h</span>
                <span className="hvr-float is-desktop">e</span>
                <span className="hvr-float is-desktop">d</span>
                <span className="hvr-float is-desktop">u</span>
                <span className="hvr-float is-desktop">l</span>
                <span className="hvr-float is-desktop">i</span>
                <span className="hvr-float is-desktop">z</span>
                <span className="hvr-float is-desktop">e</span>
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
                  <span className="hvr-float is-desktop">H</span>
                  <span className="hvr-float is-desktop">o</span>
                  <span className="hvr-float is-desktop">m</span>
                  <span className="hvr-float is-desktop">e</span>
                </Link>
                <Link to={"/team"} className="navbar-item">
                  <span className="hvr-float is-desktop">T</span>
                  <span className="hvr-float is-desktop">e</span>
                  <span className="hvr-float is-desktop">a</span>
                  <span className="hvr-float is-desktop">m</span>
                </Link>
                <Link to={"/pricing"} className="navbar-item">
                  <span className="hvr-float is-desktop">P</span>
                  <span className="hvr-float is-desktop">r</span>
                  <span className="hvr-float is-desktop">i</span>
                  <span className="hvr-float is-desktop">c</span>
                  <span className="hvr-float is-desktop">i</span>
                  <span className="hvr-float is-desktop">n</span>
                  <span className="hvr-float is-desktop">g</span>
                </Link>
                {/* <Link to={"/contact"} className="navbar-item">
                  <span className="hvr-float is-desktop">C</span>
                  <span className="hvr-float is-desktop">o</span>
                  <span className="hvr-float is-desktop">n</span>
                  <span className="hvr-float is-desktop">t</span>
                  <span className="hvr-float is-desktop">a</span>
                  <span className="hvr-float is-desktop">c</span>
                  <span className="hvr-float is-desktop">t</span>
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
