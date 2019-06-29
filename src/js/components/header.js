import React, { Component } from "react";
import headerData from "./../../json/header.json";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <section className="hero is-link is-fullheight is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              {headerData.greeting}
              <h1 className="title is-1">
                {headerData.title}
              </h1>
              <h2 className="subtitle is-3">
                {headerData.subTitle}
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
