import React, { Component } from 'react';
import Utils from './../utils/utils';
import profileData from './../../json/profile.json';

class Profile extends Component {
  render() {
    return (
      <div id="profile" className="card">
        <div className="card-content">
          <h3 className="title is-4">Profile</h3>
          <div className="content">
            <table className="table-profile">
              <tbody>
                <tr>
                  <th colSpan="1"></th>
                  <th colSpan="2"></th>
                </tr>
                { this.getProfileItemList() }
              </tbody>
            </table>
          </div>
          <br />
          <div className="buttons has-addons is-centered">
            { this.getLinkList() }
          </div>
        </div>
      </div>
    );
  }

  getProfileItemList() {
    let profileItemList = [];
    for (let itemLabel in profileData) {
      if (itemLabel === "links") continue;
      let caption = itemLabel.charAt(0).toUpperCase() + itemLabel.slice(1) + ":";
      let content = profileData[itemLabel];
      if (itemLabel === "phone") {
        if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
          content = <a href={"tel:" + Utils.escapeHtml(content.replace(/-/g, ''))}>{Utils.escapeHtml(content)}</a>
        }
        
      } else if (itemLabel === "email") {
        content = <a href="#contact">{Utils.escapeHtml(content)}</a>;
      } else {
        content = Utils.escapeHtml(content);
      }
      profileItemList.push(
        <tr key={caption}>
          <td>{Utils.escapeHtml(caption)}</td>
          <td className="word-break-all">{content}</td>
        </tr>
      );
    }
    return profileItemList;
  }

  getLinkList() {
    let linkList = [];
    let links = profileData["links"];
    if (links) {
      for (let link of links) {
        linkList.push(
          <a key={link.url} href={Utils.escapeHtml(link.url)} className="button is-link" target="_blank" rel="noopener noreferrer">
            {Utils.escapeHtml(link.caption)}
          </a>
        );
      }
    }
    return linkList;
  }
}

export default Profile;
