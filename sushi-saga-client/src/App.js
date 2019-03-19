import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  state = {
    sushis: [],
    renderedSushis: [],
    eatenSushis: [],
    updatedSushis: [],
    hasBeenEaten: false
  }

  fetchSushis = () => {
    fetch(API)
    .then(r=>r.json())
    .then(sushis => this.setState({sushis}))
  }

  componentDidMount = () => {
    this.fetchSushis()
  }

  changeEatenStatus = (id) => {
    console.log("change eaten status", id)
    // hasBeenEaten => this.setState(true)
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
            sushis={this.state.sushis}
            changeEatenStatus={this.changeEatenStatus}/>
        <Table sushis={this.state.sushis}/>
      </div>
    );
  }
}

export default App;
