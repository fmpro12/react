import React, { Component } from 'react';
import './feed.css'



class createPost extends Component {
    render() {
    return (
        let postBody = this.textArea.value;
        this.textArea.value = '';
        let post = new Post(postBody, this.user);       
    )};
  }
  
  export default createPost;