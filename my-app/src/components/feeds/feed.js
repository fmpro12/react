import React, { Component } from 'react';
import './feed.css'



class Feed extends Component {
  constructor(props) {
super(props);
this.state = {welcome: "What's up?"};
this.createPost = this.createPost.bind(this);
  }
createPost(){
return React.createElement('div', {className: 'post'});
}

    render() {
    return (
    <div className="feed">
    <div className="search_div" tabindex="0">
    <input type="text" className="search" placeholder="What's happening?"></input>
    <button onClick={()=> {this.createPost()}}>Tweet</button>
    </div>
    </div> 
    )};
  }
  
  export default Feed;