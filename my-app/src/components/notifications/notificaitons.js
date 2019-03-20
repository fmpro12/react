import React, { Component } from 'react';
import './notificaitons.scss'


class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://127.0.0.1:9090/api/followers')
      .then(response => response.json()
      .then(console.log(response)))
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .then(console.log(this.state.hits))
  }

  render() {
    const { hits, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="modal-overlay">
        <div className="feedmessages">
          <div className="header">
            <h2 className="js-ariaTitle">
              Notificaitons
            </h2>
            <div className="yee">
              {hits.map(hit =>
                <article key={hit.id}>
                  <span >{hit.name}</span>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Notifications;