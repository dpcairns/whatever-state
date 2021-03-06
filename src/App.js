import React, { Component } from 'react'
import './App.css';
class Counter extends Component {
  state = { 
    counter: 0,
    color: 'red'
   }

  handleClick = () => {
      this.setState({ 
        counter: this.state.counter + 1,
        color: `rgb(${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)})`
       })
  }

  render() {
      return (
        <div className="counter" style={{ background: this.state.color }}>
          <div>the counter is {this.state.counter}</div>
          <button onClick={this.handleClick}>increase count</button>
        </div>
      );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}
