import React, { Component } from 'react';
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
    const filtered = tweets.filter(item => (item.entities.media !==undefined))
     if (filtered.length === 0) {
      console.log(filtered.length)
      return tweets.map((item) =>              
        <div className='feed_main'>
          <strong className="fullname">{item.user.name}</strong>
          <article
            key={item.id}>
            {item.full_text}
          </article>
          <br />
        </div>
      )
    } else if (filtered.length > 0) {
      return filtered.map((item) =>              
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
    } else if (filtered.length === 0 ){
      return (
        <div className='feed_main'>       
          <h2 className="js-ariaTitle">
            Not found...
          </h2>
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

