import React, { Component } from 'react';
import Pins from './Pins.jsx';
import ScoreBoard from './ScoreBoard.jsx/index.js.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      scorecard: [],
      
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Pins handleClick={this.handleClick}/>
        <ScoreBoard />
      </div>
    );
  }
}

export default App;