import React, { Component } from 'react';
// import './notificaitons.scss'
// import Axios from 'axios';
import { connect } from "react-redux";
import '../posts/post.scss'


class Notifications extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      hits: []     
    }
  }

  
  render() { 
    const { tweets, loading } = this.props
    if (loading) {
      return (
        <div className='feed_main'>       
          <h2 className="js-ariaTitle">
            Loading...
          </h2>
        </div>
      )
    }
    if(tweets === undefined){
      return (
        <div className='feed_main'>       
          <h2 className="js-ariaTitle">
            Undefined...
          </h2>
        </div>
      )
    }
    else {
      return tweets.filter(item => item.entities.media !==undefined).map((item) =>        
        <div className='feed_main'>
          <strong className="fullname">{item.user.name}</strong>
          <article
            key={item.id}>
            {item.full_text}
          </article>
          <br />
          <img src={item.entities.media[0].media_url} alt="" className="images" />      
        </div>
      )
    }
  }
}    

const mapStateToProps = state => ({
  tweets: state.tweets.tweets,
  loading: state.tweets.loading,
  error: state.tweets.error
});

export default connect(mapStateToProps)(Notifications);

