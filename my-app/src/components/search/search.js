import axios from 'axios';
import React, { Component } from 'react'
// import Results from './results'
const API_URL = 'http://127.0.0.1:9090/api/tweets?screen_name'



class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

// getInfo = () => {
//     axios.get(`${API_URL}=${this.state.value}`)
//       .then(({ data }) => {
//         this.setState({
//           results: data.data                    
//         })
//       })
//   }


  handleChange(event) {
    this.setState({ value: event.target.value })
    axios.get(`${API_URL}=${this.state.value}`)
      .then(({ data }) => {
        this.setState({
          results: data.data                    
        })
      })
  }

      
  

  render() {
    return (     
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />     
        </div>
    )
  }
}

export default Search