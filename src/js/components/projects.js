import React, { Component } from "react";
import Utils from "./../utils/utils";
import ProjectItem from "./projects-item";
import projectsData from "./../../json/projects.json";

class ProjectsRow extends Component {
  constructor(props) {
    super(props);
    this.MAX_COL = props.MAX_COL;
    this.currentRow = props.currentRow;
    this.projectsData = props.projectsData;
  }

  render() {
    const BEGIN_POSITION = this.MAX_COL * this.currentRow;
    const END_POSITION = this.MAX_COL * this.currentRow + this.MAX_COL;
    let projects = [];

    for (var i = 0; i < this.projectsData.projects.length; i++) {
      if (i < BEGIN_POSITION) {
        continue;
      }
      if (i === END_POSITION) {
        break;
      }
      let project = this.projectsData.projects[i];
      projects.push(<ProjectItem key={i} projectData={project} />);
    }

    return (
      <div
        id={this.currentRow}
        className="columns"
        style={{ display: Utils.convVisibleToStr(this.props.visible) }}
      >
        {projects}
      </div>
    );
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.MAX_INIT_SHOW_ROW = 3;
    this.MAX_COL = 3;
    this.MAX_ROW = Math.ceil(projectsData.projects.length / this.MAX_COL);

    let visibleRows = [];
    for (let i = 0; i < this.MAX_ROW; i++) {
      visibleRows.push(i < this.MAX_INIT_SHOW_ROW);
    }
    this.state = {
      visibleShowMoreButton: true,
      visibleHideButton: false,
      visibleRows: visibleRows
    }
    this.showMore = this.showMore.bind(this);
    this.hide = this.hide.bind(this);
  }

  showMore() {
    this.switchVisibleButtons();
    let visibleRows = this.state.visibleRows;
    visibleRows.fill(true);
    this.setState({
      visibleRows: visibleRows
    })
  }

  hide() {
    this.switchVisibleButtons();
    let visibleRows = this.state.visibleRows;
    visibleRows.fill(false)
               .fill(true, 0, this.MAX_INIT_SHOW_ROW);
    this.setState({
      visibleRows: visibleRows
    })
  }

  switchVisibleButtons() {
    this.setState((prev, props) => {
      const newState = !prev.visibleShowMoreButton;
      return { visibleShowMoreButton: newState };
    });
    this.setState((prev, props) => {
      const newState = !prev.visibleHideButton;
      return { visibleHideButton: newState };
    });
  }
  
  render() {
    let projects = [];
    const visibleRows = this.state.visibleRows;
    for (let row = 0; row < visibleRows.length; row++) {
      projects.push(
        <ProjectsRow
          key={"Row" + row}
          MAX_COL={this.MAX_COL}
          currentRow={row}
          visible={visibleRows[row]}
          projectsData={projectsData}
        />
      );
    }

    return (
      <div id="projects">
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h3 className="title is-2">
                {Utils.escapeHtml(projectsData.title)}
              </h3>
              <h4 className="subtitle is-5">
                {Utils.escapeHtml(projectsData.subTitle)}
              </h4>
            </div>
            <br />

            <div className="container projects-container">{projects}</div>
            <div
              id="show-more-projects-button"
              className="button is-medium show-more-projects-button"
              style={{ display: Utils.convVisibleToStr(this.state.visibleShowMoreButton) }}
              onClick={this.showMore}
            >
              Show more
            </div>
            <div
              id="hide-projects-button"
              className="button is-medium hide-projects-button"
              style={{ display: Utils.convVisibleToStr(this.state.visibleHideButton) }}
              onClick={this.hide}
            >
              Hide
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
