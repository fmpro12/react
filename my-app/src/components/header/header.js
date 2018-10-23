import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
    return (
    <div className="Header">
    <span className="Icon Icon--homeFilled Icon--large u-textUserColor"></span>
    <i className="fab fa-twitter"></i>
    <i className="fas fa-home">
    <span>Home</span>
    </i>
    <i className="far fa-bell">
    <span>Notifications</span></i>
    <i className="far fa-envelope">
    <span>Messages</span>
    </i>
    <label className="visuallyhidden" for="search-query">Search query>
    <input className="search-input" type="text" id="search-query" placeholder="Search Twitter"></input>
    </label>
    </div>     
    )};
  }
  
  export default Header;