import React, { Component } from "react";
import Utils from "./../utils/utils";
import skillsTagsData from "./../../json/skills-tags.json";

class SkillsTags extends Component {
  render() {
    let skillTagList = [];
    for (let skillsTag of skillsTagsData) {
      skillTagList.push(
        <span key={Utils.escapeHtml(skillsTag.skill)} className="tag is-light">
          {Utils.escapeHtml(skillsTag.skill)}
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
