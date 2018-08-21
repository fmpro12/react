import React, { Component } from 'react';

const btns = ['Home', 'Notifications', 'Messges'];

class Buttton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBtn: null
        }
    }

    
    onClick() {
window.alert({this.props:id});
    }

    render() {
        return <div>            
{btns.map((btn, i) => <button onClick={this.onClick}>{btn}</button>)}
         </div>   
    } 
};

  
export default Buttton;