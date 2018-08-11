import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Div from './components/divs/Div'

class App extends Component {
  render() {
    return (
      <div>
<Header />
<Div />
</div>
    );
  }
}

export default App;