import React, { Component } from 'react';
import './header.scss';
import { NavLink, Link } from 'react-router-dom'
 

class Header extends Component {
  previousLocation = this.props.location;

    render() {
    return (
    <div className="Header">
    <NavLink to="/">Home</NavLink>
    <NavLink to="notifications/">Notifications</NavLink>
    <Link
      to={{
            pathname: "/messages",           
            state: { modal: true }
          }}
        >
          Messages
    </Link>
    </div>     
    )};
  }
  


  
  export default Header;