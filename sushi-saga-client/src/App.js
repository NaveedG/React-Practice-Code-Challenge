import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      eaten: [],
      startIndex: 0,
      money: 313
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ sushis: data }))
  }

  addMore = () => {
    this.setState({ startIndex: this.state.startIndex + 1 })
  }

  eatSushi = (sushi) => {
    if ((this.state.money >= sushi.price) && !(this.state.eaten.includes(sushi)))
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      })
    else
      null
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis.slice(this.state.startIndex * 4, (this.state.startIndex * 4) + 4)}
        addMore={this.addMore}
        eaten={this.state.eaten}
        eatSushi={this.eatSushi}/>
        <Table eaten={this.state.eaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;