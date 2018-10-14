import React, { Component } from 'react';
import './trend.css'

class Trend extends Component {
    render() {
    return (
    <div className="trend">
    <span className="trends">Trends for you
    <button type="button" className="refresh"><small>Change</small></button>
    <ul className="trends_items">
<li>German
  <div className="stats">66.2K Tweets</div>
</li>
<li>Israel
<div className="stats">332K Tweets</div>
</li>
<li>Russia
<div className="stats">3,646K Tweets</div>
</li>
<li>Army
<div className="stats">4835 Tweets</div>
</li>
<li>#FlashBackFriday
<div className="stats">131K Tweets</div>
</li>
<li>#ReallyBadAdviceIn5Words
<div className="stats">27,4K Tweets</div>
</li>
<li>#twitter
<div className="stats">55.1K Tweets</div>
</li>
<li>German
<div className="stats">66.2K Tweets</div>
</li>
<li>Facebook
<div className="stats">86K Tweets</div>
</li>
    </ul>
    </span> 
    </div> 
    )};
  }
  
  export default Trend;