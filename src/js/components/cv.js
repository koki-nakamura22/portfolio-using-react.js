import React, { Component } from 'react';
import cvData from "../../json/cv.json";
import cvFile from './../../docs/CV_KokiNakamura.docx';

class CV extends Component {
  render() {
    return (
      <div id="cv">
        <section className="section">
          <div className="section-heading">
            <h3 className="title is-2">{cvData.title}</h3>
            <h4 className="subtitle is-5">{cvData.subTitle}</h4>
            <a id="downloadCVButton" href={cvFile} className="button is-link is-medium">
              <span className="icon"> <i className="fas fa-file-alt"></i> </span>
              <span>{cvData.downloadButtonLabel}</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
