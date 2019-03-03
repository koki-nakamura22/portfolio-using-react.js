import React, { Component } from 'react';
import Utils from './../utils/utils';
import aboutTitleData from './../../json/about-title.json';

class AboutTitle extends Component {
  render() {

    return (
      <div id="about-title">
        <div className="section-heading">
          <h3 className="title is-2">{Utils.escapeHtml(aboutTitleData.title)}</h3>
          <h4 className="subtitle is-5">{Utils.escapeHtml(aboutTitleData.subTitle)}</h4>
          <div className="container">
              <span dangerouslySetInnerHTML={{__html: Utils.arrayToHtml(aboutTitleData.selfIntroduction)}}>
              </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTitle;
