import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
    return (
    <div className="Header">
    <i class="fab fa-twitter"></i>
    <i class="fas fa-home">
    <span>Home</span>
    </i>
    <i class="far fa-bell">
    <span>Notifications</span></i>
    <i class="far fa-envelope">
    <span>Messages</span>
    </i>
    </div>     
    )};
  }
  
  export default Header;