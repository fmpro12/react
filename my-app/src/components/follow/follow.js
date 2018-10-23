import React, { Component } from 'react';
import './follow';
import ProductList from './follows_test'

class Follows extends Component {
    render() {
    return (
    <div className="follows">
    <div className="test">
    <h3>Who to follow
    <button type="button" className="refresh"><small>Refresh</small></button>
    <button type="button" className="refresh"><small>View All</small></button>
    </h3>
    <ProductList />
    <br />
    <div className="google">
    <span className="service u-sizeFit">
    <span class="icon service-gmail"></span>
    </span>
    <strong className="strong">Find people you know</strong>
    <span className="span_google">Import your contacts from Gmail</span>
    </div>
    <br />
    <button type="button" class="refresh">Connect other address books</button>
    </div>
    </div> 
    )};
  }
  
  export default Follows;