import React, { Component } from 'react';
import Utils from "./../utils/utils";

class NavigationBarItem extends Component {
  render() {
    return (
      <a class="navbar-item" href={"#" + Utils.escapeHtml(this.props.jsonData.link)}>
        <span class="icon"> <i class={Utils.escapeHtml(this.props.jsonData.icon)}></i> </span>
        <span>{Utils.escapeHtml(this.props.jsonData.caption)}</span>
      </a>
    );
  }
}

export default NavigationBarItem;
