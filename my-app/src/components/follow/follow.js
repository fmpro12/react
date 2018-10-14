import React, { Component } from 'react';
import './follow.css';
import FollowersRedux from './followers_redux'

class Follows extends Component {
    render() {
    return (
    <div className="follows">
    <div className="test">
    <h3>Who to follow
    <button type="button" className="refresh"><small>Refresh</small></button>
    <button type="button" className="refresh"><small>View All</small></button>
    </h3>
    <FollowersRedux />
    </div>
    </div> 
    )};
  }
  
  export default Follows;