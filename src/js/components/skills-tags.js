import React, { Component } from "react";
import skillsTagsData from "./../../json/skills-tags.json";

class SkillsTags extends Component {
  render() {
    let skillTagList = [];
    for (let skillsTag of skillsTagsData) {
      skillTagList.push(
        <span key={skillsTag.skill} className="tag is-light">
          {skillsTag.skill}
        </span>
      );
    }

    return (
      <div id="skills-tags">
        <div className="tags custom-tags">{skillTagList}</div>
      </div>
    );
  }
}

export default SkillsTags;
