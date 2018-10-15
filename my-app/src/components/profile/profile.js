import React, { Component } from 'react';
import './profile.css'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="blue">
        </div>
        <div className="white">
          <span className="user">
            <img class="photo" src="https://pbs.twimg.com/profile_images/1725500761/image_bigger.jpg" alt=""></img>
          </span>
          <div className="users">
          <span className="username">Yan Khusid</span>
          <span className="tweetname">@fmpro12</span>
          </div>
          <div className="stats_profile">
          <span className="tweets">
          Tweets
          <br /> <span className="number">100</span>
          </span>
          <span className="tweets1">
          Following
          <br /> <span className="number">20206</span>
          </span>
          </div>
        </div>
      </div>
    )
  };
}

export default Profile;