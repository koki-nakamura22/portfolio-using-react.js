import React, { Component } from 'react';
import Utils from "./../utils/utils";
import headerData from "./../../json/header.json";

class Header extends Component {
  render() {
    return(
      <section className="hero is-link is-fullheight is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            {Utils.escapeHtml(headerData.greeting)}
            <h1 className="title is-1">{Utils.escapeHtml(headerData.title)}</h1>
            <h2 className="subtitle is-3">{Utils.escapeHtml(headerData.subTitle)}</h2>
          </div>
        </div>
      </section>   
    );
  }
}

export default Header;
