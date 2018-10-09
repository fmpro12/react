import React from 'react';
import './feed.css'




class NewComponent extends React.Component{ 
  render() {
    return (
      <article className="post" {...this.props}>
        {this.props.author}
      </article>
    );
  }  
}

class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        click
      </button>
    );
  }  
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      author:props.author,
      clicked: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      clicked: true
    });
  }
  
  render() {
    return (
      <div className="feed">      
      <div className="search_div" tabindex="0">
      <input type="text" className="search" placeholder="What's happening?"></input>      
        <Button onClick={this.handleClick} />
          </div>
          {this.state.clicked ? <NewComponent author={ this.state.author }/> : null}
      </div>
    );
  }
};

export default Feed;


