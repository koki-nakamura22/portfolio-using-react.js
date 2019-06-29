import React, { Component } from 'react';
import Utils from '../utils/utils';
import projectsData from "./../../json/projects.json";

class ProjectsItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: props.modalState
    }
    this.projectData = props.projectData;
    this.close = props.toggleModal;
  }

  generateTitleHTMLCode(label) {
    return (
      <h1 key={label}>{label}</h1>  
    )
  }

  generateGeneralContentBodyHTMLCode(detail) {
    return (
      <p key={detail}>
        {Utils.arrayToHtml(Utils.convEmptyStrToNothing(detail))}
      </p>
    )
  }

  generateTermHTMLCode(from, to) {
    return(
      <p key={from+to}>
        {Utils.convMMMMYYYY(from)} ~ {Utils.convMMMMYYYY(to)}
      </p>
    )
  }

  close() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  render() {
    if (!this.props.modalState) {
      return null;
    }

    let labels = projectsData.projectsLabel;

    let contents = [];
    contents.push(this.generateTitleHTMLCode(labels.summary));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.summary));
    contents.push(this.generateTitleHTMLCode(labels.term));
    contents.push(this.generateTermHTMLCode(this.projectData.termFrom, this.projectData.termTo));
    contents.push(this.generateTitleHTMLCode(labels.usedProgrammingLanguageAndLibrary));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.usedProgrammingLanguageAndLibrary));
    contents.push(this.generateTitleHTMLCode(labels.usedDatabase));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.usedDatabase));
    contents.push(this.generateTitleHTMLCode(labels.usedTools));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.usedTools));
    contents.push(this.generateTitleHTMLCode(labels.role));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.role));
    contents.push(this.generateTitleHTMLCode(labels.workInCharge));
    contents.push(this.generateGeneralContentBodyHTMLCode(this.projectData.workInCharge));

    return (
      <div id="project-modal" className="modal is-active">
        <div
          className="modal-background"
          onClick={this.close}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              { this.projectData.projectName }
            </div>
            <button
              className="delete"
              aria-label="close"
              onClick={this.close}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="content whitespace-pre-line">
              { contents }
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              id="close-dialog"
              className="button"
              onClick={this.close}
            >Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default ProjectsItemModal;
