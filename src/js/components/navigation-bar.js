import React, { Component } from 'react';
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
    document.querySelector("#" + burger.dataset.target).classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar is-link is-fixed-top">
        <div class="navbar-brand">
          <div
            class="navbar-burger burger"
            data-target="navbarTransparent"
            onClick={this.clickBurgerMenu}
          >
            <span></span> <span></span> <span></span>
          </div>
        </div>  

        <div id="navbarTransparent" class="navbar-menu">
          <div class="navbar-end">
            {
              barItems.map((e, i) => 
                <NavigationBarItem jsonData={e} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
