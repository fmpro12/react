import React, { Component } from 'react';
import './feed_messages.scss'




class Feedmessages extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
    }
  }

  render() {
    const bodyScrollLock = require("body-scroll-lock");
    bodyScrollLock.disableBodyScroll(this);
    return (
      
        <div className="modal-overlay">
        <div ref={this.setWrapperRef}>{this.props.children}
        <div className="feedmessages">
        <div className="header">
          <h2 class="js-ariaTitle">
            Direct Messages
          </h2>
        </div>
        </div>
        </div>
        </div>
    )
  };
}


export default Feedmessages;