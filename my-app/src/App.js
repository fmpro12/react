import React from 'react';
import './App.scss';
import Profile from './components/profile/profile';
import Trend from './components/trends/trend';
import Copyrights from './components/copyrights/copyrights';
import Follows from './components/follow/follow';
import Header from './components/header/header';
import Messages from './components/feeds/feed'
import Feedmessages from './components/feed_messages/feed_messages'
import './twitter.scss'
import { BrowserRouter as Router, Route} from 'react-router-dom'




const App = () => (
  <Router>
      <header>
        <Header />
        <div className="flex_box">
          <Route  path="/" component={Profile} />
          <Route  path="/" component={Trend} />
          <Route  exact path="/" component={Messages} />
          <Route  path="/messages" component={Feedmessages} />
          <Route  path="/" component={Follows} />
          <Route  path="/" component={Copyrights} />
        </div>
      </header>
      </Router>
     )


export default App;