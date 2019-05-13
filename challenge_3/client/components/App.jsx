import React, { Component } from 'react';
import Pins from './Pins.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
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
        <ScoreCard />
      </div>
    );
  }
}

export default App;