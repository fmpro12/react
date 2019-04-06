import React, { Component } from 'react'
import { connect } from "react-redux";
import './style.scss';
import { fetchTweets } from '../redux_store/actions/gettweets'

const API_URL = 'http://127.0.0.1:9090/api/tweets?screen_name'
// import Notificaitons from '../notifications/notificaitons'




class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      hits: [],
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log('search',props);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    const id = `${API_URL}=${this.state.value}`
     event.preventDefault();
     this.props.dispatch(fetchTweets(id));
    }
    
 
  

  render() {
    return (      
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const mapStateToProps = state => ({
  TweetsFetch: state.tweets.tweets,
  loading: state.tweets.loading,
  error: state.tweets.error
});

export default connect(mapStateToProps)(Search);

