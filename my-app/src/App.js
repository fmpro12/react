import React from "react";
import './App.scss';
import Profile from './components/profile/profile';
import Trend from './components/trends/trend';
import Copyrights from './components/copyrights/copyrights';
import Follows from './components/follow/follow';
import './components/header/header.scss'
import './index.scss';
import Messages from './components/feeds/feed';
import Feedmessages from './components/feed_messages/feed_messages'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './components/feed_messages/feed_messages.scss'
import Search from './components/search/search'


class ModalSwitch extends React.Component {

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); 



    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>         
          <Route path="/" component={AllComponents} />       
        </Switch>
        {isModal ? <Route exact path="/message/0" component={Modal} /> : null}             
      </div>
    );
  }
}

const Components = () => {
  return (
    <header>
  <div className="flex_box">
  <Profile />
  <Trend />
  <Messages  />
  <Follows />
  <Copyrights />
  </div>
  </header>
  )
  
}
const AllComponents = () => { 
    return (
      <div>
      <Header  />
      <Components />
      </div>
    )
  }



const ITEMS = [
  { id: 0, title: "Messages"}
];


function Header () {
  return (
    <div className="header1">
    <div className="modal_message">  
    <Link to="/">
       <p className="links2">Home</p>
       </Link>    
      {ITEMS.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/message/${i.id}`,           
            state: { modal: true }
          }}
        >         
          <p className="links2">{i.title}</p>          
        </Link>
      ))}
      </div>  
      <Search />   
      </div>      
  );
}

function Modal({ history }) {
  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  // let image = ITEMS[parseInt(match.params.id, 10)];

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >    
        <Feedmessages />
      </div>   
  );
}


function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}


export default ModalGallery;