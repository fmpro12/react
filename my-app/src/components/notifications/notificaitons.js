import React, { Component } from 'react';
import './notificaitons.scss'


class Notifications extends Component {
  render() {
    return (
    <div className="modal-overlay">
      <div className="feedmessages">
        <div className="header">
          <h2 className="js-ariaTitle">
            Notificaitons
        </h2>
        </div>
      </div>
    </div>
    )
  }
}




export default Notifications;