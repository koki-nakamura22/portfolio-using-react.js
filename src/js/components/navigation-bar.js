import React, { Component } from "react";
import NavigationBarItem from "./navigation-bar-item";
import barItems from "../../json/navigation-bar-items.json";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.barItems = barItems;
    this.count = this.barItems.length;
  }

  clickBurgerMenu() {
    let burger = document.querySelector(".burger");
    burger.classList.toggle("is-active");
    document
      .querySelector("#" + burger.dataset.target)
      .classList.toggle("is-active");
  }

  render() {
    return (
      <div id="navigation-bar">
        <nav className="navbar is-link is-fixed-top">
          <div className="navbar-brand">
            <div
              className="navbar-burger burger"
              data-target="navbarTransparent"
              onClick={this.clickBurgerMenu}
            >
              <span /> <span /> <span />
            </div>
          </div>

          <div id="navbarTransparent" className="navbar-menu">
            <div className="navbar-end">
              {barItems.map((e, i) => (
                <NavigationBarItem key={e.link} jsonData={e} />
              ))}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
