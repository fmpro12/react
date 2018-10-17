import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Trend from './components/trends/trend';
import Copyrights from './components/copyrights/copyrights';
import Follows from './components/follow/follow';
import Header from './components/header/header';
import Messages from './components/feeds/feed'
import './twitter.css'



class App extends Component {
  render() {
    return (
      <header>
        <Header />
        <div className="flex_box">
          <Profile />
          <Trend />
          <Messages />
          <Follows />
          <Copyrights />
        </div>
      </header>
    )
  }
}

export default App;