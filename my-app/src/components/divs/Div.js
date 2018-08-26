import React, { Component } from 'react';
import './Div.css';
import Leftup from './leftup';
import Leftdown from './leftdown';
import Main from './main';
import Rightdown from './rightdown';
import Rightup from './rightup';


class Div extends Component {
    render() {
    return (
    <div className="flex_box">
  <Leftup />
  <Leftdown />
  <Main />
  <Rightup />
  <Rightdown />
    </div>     
    )};
  }
  
  export default Div;