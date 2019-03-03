import React, { Component } from 'react';
import Utils from './../utils/utils';
import skillsData from './../../json/skills.json';

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="card">
        <div className="card">
          <div className="card-content skills-content">
            <h3 className="title is-4">Skills</h3>
            <div className="content">
            { this.getSkilsList() }
            </div>
          </div>
        </div>
      </div>
    );
  }

  getSkilsList() {
    let skillsList = [];
    for (let skill of skillsData) {
      skillsList.push(
        <article key={skill.technology} className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{Utils.escapeHtml(skill.technology)}:</strong> <br />
                <progress
                  className="progress is-primary"
                  value={Utils.escapeHtml(skill.degreeOfSkill)}
                  max="100"
                ></progress>
              </p>
            </div>
          </div>
        </article>
      );
    }
    return skillsList;
  }
}

export default Skills;
