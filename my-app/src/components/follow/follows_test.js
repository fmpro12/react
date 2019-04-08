
import React from "react";
import axios from 'axios';


class ProductList extends React.Component {
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
    axios.get('http://127.0.0.1:9090/api/followers')
    .then(result => this.setState({
      hits: result.data,
      isLoading: false
    }))
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
}
  


render () {
  const {hits} = this.state
  return hits.map(unit =>
    <div className="followers_flex">
    <br />
     <img src={unit.img} className="icons_followers" alt="" />
        <article
         className="followers_redux"
         key={unit.id}>
        {unit.name}
        <br />
        <button className="EdgeButton1">
        <span className="follow_button">follow</span>
        </button>
        </article>
    </div>
  )}}


export default ProductList