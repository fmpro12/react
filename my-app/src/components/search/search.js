import axios from 'axios';
import React, { Component } from 'react'
// import Results from './results'
const API_URL = 'http://127.0.0.1:9090/api/tweets?screen_name'



class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      hits: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    axios.get(`${API_URL}=${this.state.value}`)
    .then(({ data }) => {
      this.setState({
        hits: data.data                    
      })
    })
    .catch(e => console.log(e));

    event.preventDefault();
  }    
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search