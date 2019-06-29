import React, { Component } from "react";
import AboutTitle from "./about-title";
import Profile from "./profile";
import ProfilePicture from "./profile-picture";
import Skills from "./skills";

class About extends Component {
  render() {
    return (
      <section className="section" id="about">
        <AboutTitle />

        <div className="columns has-same-height is-gapless">
          <div className="column">
            <Profile />
          </div>
          <div className="column">
            <ProfilePicture />
          </div>
          <div className="column">
            <Skills />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
