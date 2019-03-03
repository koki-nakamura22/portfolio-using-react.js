import React, { Component } from 'react';
import selfPortrait from './../../images/self-face-photos.jpg';

class ProfilePicture extends Component {
  render() {
    return (
      <div id="profile-picture" className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={selfPortrait}
              alt=""
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
