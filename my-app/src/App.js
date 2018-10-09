import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Trend from './components/trends/trend';
// import { ReduxComponent, NewComponent } from './components/redux_main'
import Copyrights from './components/copyrights/copyrights';
import Follows from './components/follow/follow';
import Header from './components/header/header';
import Feed from './components/feeds/feed'


class App extends Component {
  render() {
    return (
      <header>
        <Header />
        <div className="flex_box">
          <Profile />
          <Trend />
          <Feed />
          {/* <ReduxComponent />
          <NewComponent /> */}
          {/* <Button /> */}
          {/* <Feed author={ this.state.author } /> */}
          <Follows />
          <Copyrights />
        </div>
      </header>
    )
  }
}

export default App;