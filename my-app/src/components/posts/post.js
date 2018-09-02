import React, { Component } from 'react';
import './post.css'



class Post extends Component 
constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
    render() {
    return (
    <div className="post">
          <button className="comments" onClick={() =>
             alert('click')}>
        {this.props.value}
      </button>
    </div> 
    )};
  }
  
  export default Post;

