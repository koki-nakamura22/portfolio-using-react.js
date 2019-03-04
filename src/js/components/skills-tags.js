import React, { Component } from 'react';
import Utils from './../utils/utils';
import skillsTagsData from './../../json/skills-tags.json';

class SkillsTags extends Component {
  render() {
    let skillTagList = [];
    for (let skillsTag of skillsTagsData) {
      skillTagList.push(
        <span class="tag is-light">{Utils.escapeHtml(skillsTag.skill)}</span>
      );  
    }

    return (
      <div class="tags custom-tags">
        { skillTagList }
      </div>
    );
  }
}

export default SkillsTags;
