import React, { Component } from 'react';
// import './notificaitons.scss'
import Axios from 'axios';
import '../posts/post.scss'


class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      images: [],
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
        isLoading: false, 
        images: result.data.filter(image => image.entities.media !==undefined).map(image => image.entities.media[0].media_url)
    }))
    .catch(e => console.log(e));
  }

  
  render() {    
    const { hits, isLoading, images } = this.state; 

    const image = images.map((unit) =>
      <img src={unit} alt="" className="images"></img>      
    )


console.log(image)

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
      return hits.map((data) =>        
        <div className='feed_main'>
          <strong className="fullname">{data.user.name}</strong>
          <article
            key={data.id}
          >{data.full_text}
          </article>
          <br />     
         {hits}                       
        </div>
      )
    }
  }
}    

export default Notifications;