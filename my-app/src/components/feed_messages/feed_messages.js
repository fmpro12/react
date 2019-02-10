import React, { Component } from 'react';
import { connect } from "react-redux";
import './feed_messages.scss'
import { fetchMessages } from '../redux_store/actions/actionFetchMessages';


class Feedmessages extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }
fetchFunction () {
    if (this.props.messagesFetch === undefined){
      return <div>No messages found...</div>;
    }
    return this.props.messagesFetch.map((unit) => {
      return (
          <div className="followers_flex">
          <br />
           <img src={unit.img} className="icons_followers" alt="" />
              <article
               className="article_followers_redux"
               key={unit.id}>
              {unit.name}
              </article>
              <div className="tweet">
              {unit.tweet}
              </div>
              <div className="body">
              {unit.body} 
              </div>             
              <br />         
          </div>
      )
  })
    

  }
  render() {
    const { error, loading} = this.props;

        
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
    <div className="modal-overlay">
      <div className="feedmessages">
        <div className="header">
          <h2 className="js-ariaTitle">
            Direct Messages
        </h2>
        </div>
        {this.fetchFunction()}
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  messagesFetch: state.modal_messages.items,
  loading: state.modal_messages.loading,
  error: state.modal_messages.error
});


export default connect (mapStateToProps)(Feedmessages);