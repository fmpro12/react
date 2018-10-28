import React, { Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom'
 

class Header extends Component {
    render() {
    return (
    <div className="Header">
    <span className="Icon Icon--homeFilled Icon--large u-textUserColor"></span>
    <Link to="/">Home</Link>
    <span>Notifications</span>
    <Link to="/messages">Messages</Link>
    <label className="visuallyhidden" for="search-query">Search query>
    <input className="search-input" type="text" id="search-query" placeholder="Search Twitter"></input>
    </label>
    </div>     
    )};
  }
  
  export default Header;