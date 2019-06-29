import React, { Component } from 'react';
import Utils from './../utils/utils';
import ProjectsItemModal from './projects-item-modal';
import projectsData from "./../../json/projects.json";

class ProjectsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
    this.projectData = props.projectData;
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  render() {
    let labels = projectsData.projectsLabel;

    return(
      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {Utils.escapeHtml(this.projectData.projectName)}
            </p>
          </header>
            
          <div className="card-content">
            <div id="content" style={{whiteSpace: 'pre-line'}}>
              <div>
                <strong>{Utils.escapeHtml(labels.summary)}</strong>
                <p>{Utils.arrayToHtml(this.projectData.summary)}</p>
                <br></br>
              </div>
              <div>
                <strong>{Utils.escapeHtml(labels.term)}</strong>
                <p>{Utils.escapeHtml(Utils.convMMMMYYYY(this.projectData.termFrom))} ~ {Utils.escapeHtml(Utils.convMMMMYYYY(this.projectData.termTo))}</p>
                <br></br>
              </div>
              <div>
                <strong>{Utils.escapeHtml(labels.usedProgrammingLanguageAndLibrary)}</strong>
                <p>{Utils.arrayToHtml(
                  Utils.convEmptyStrToNothing(
                    this.projectData.usedProgrammingLanguageAndLibrary
                  )
                )}</p>
              </div>
            </div>
          </div>

          <footer className="card-footer">
            <div
              className="card-footer-item can-open-content"
              onClick={this.toggleModal}
            >
              <p>Show Detail</p>
            </div>
          </footer>
        </div>
        <ProjectsItemModal
          modalState={this.state.modalState} 
          toggleModal={this.toggleModal}
          projectData={this.projectData}
        />
      </div>
    );
  }
}

export default ProjectsItem;
