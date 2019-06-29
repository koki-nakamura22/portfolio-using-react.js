import React, { Component } from 'react';
import resumeData from "./../../json/resume.json";
import resumeFile from './../../docs/Resume_KokiNakamura.docx';

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <section className="section">
          <div className="section-heading">
            <h3 className="title is-2">{resumeData.title}</h3>
            <h4 className="subtitle is-5">{resumeData.subTitle}</h4>
            <a id="downloadResumeButton" href={resumeFile} className="button is-link is-medium">
              <span className="icon"> <i className="fas fa-file-alt"></i> </span>
              <span>{resumeData.downloadButtonLabel}</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
