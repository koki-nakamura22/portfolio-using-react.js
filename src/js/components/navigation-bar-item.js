import React, { Component } from 'react';

class NavigationBarItem extends Component {
  render() {
    return (
      <a className="navbar-item" href={"#" + this.props.jsonData.link}>
        <span className="icon"> <i className={this.props.jsonData.icon}></i> </span>
        <span>{this.props.jsonData.caption}</span>
      </a>
    );
  }
}

export default NavigationBarItem;
