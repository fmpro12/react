import React, { Component } from 'react';
// import './notificaitons.scss'
import Axios from 'axios';
import '../posts/post.scss'


class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    Axios.get('http://127.0.0.1:9090/api/tweets'
    ,{
     headers: {
      'Access-Control-Allow-Origin': '*',          
     }}
    )   
    .then(result => this.setState({
        hits: result.data,
        isLoading: false
    }))
    .catch(e => console.log(e));
  }
  
  render() {
    const size = 1;
    const { hits, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className='feed_main'>       
              <h2 className="js-ariaTitle">
                Loading...
              </h2>
            </div>
      )
    }
  else {
    return hits.slice(0, size).map(( data) => {
        return(
              <div className='feed_main'>
              <strong className="fullname">{data.user.name} </strong>
              <article
                key={data.id}
                >{data.text}
                </article>
              <br />
              <img src={data.entities.media[0].media_url} className="images" alt="" />
            </div>
            )
          })
      }
    }
  }    

export default Notifications;