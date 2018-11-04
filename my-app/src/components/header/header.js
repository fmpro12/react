import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom'
 

class Header extends Component {
    render() {
    return (
    <div className="Header">
    <span className="Icon Icon--homeFilled Icon--large u-textUserColor"></span>
    <NavLink to="/">Home</NavLink>
    <span>Notifications</span>
    <NavLink to="/messages" activeClassName="active_click">Messages</NavLink>
    <label className="visuallyhidden" for="search-query">Search query>
    <input className="search-input" type="text" id="search-query" placeholder="Search Twitter"></input>
    </label>
    </div>     
    )};
  }
  
  export default Header;