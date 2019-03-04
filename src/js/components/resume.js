import React, { Component } from 'react';
import Utils from './../utils/utils';
import resumeData from "./../../json/resume.json";
import resumeFile from './../../docs/Resume_KokiNakamura.docx';

class Resume extends Component {
  render() {
    return (
      <section className="section">
        <div className="section-heading">
          <h3 className="title is-2">{Utils.escapeHtml(resumeData.title)}</h3>
          <h4 className="subtitle is-5">{Utils.escapeHtml(resumeData.subTitle)}</h4>
          <a id="downloadResumeButton" href={resumeFile} className="button is-link is-medium">
            <span className="icon"> <i className="fas fa-file-alt"></i> </span>
            <span>{Utils.escapeHtml(resumeData.downloadButtonLabel)}</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Resume;
