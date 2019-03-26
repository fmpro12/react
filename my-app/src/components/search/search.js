import axios from 'axios';
import React, { Component } from 'react'
// import Results from './results'
const API_URL = 'http://127.0.0.1:9090/api/tweets'



class Search extends Component {
    constructor(props) {
    super(props);

 this.state = {
   query: '',
 }
}
getInfo = () => {
    axios.get(`${API_URL}&screen_name=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data                    
        })
        console.log(data)
      })
  }




  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          />
          {/* <Results results={this.state.results} /> */}
        </form>
    )
  }
}

export default Search