import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      count: 0
    }
  }
  
  add = () => {
    let addedNumber = this.state.count + 1
    this.setState({ count: addedNumber })
  }

  subtract = () => {
    let subtractedNumber = this.state.count - 1
    this.setState({ count: subtractedNumber })
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>The current count is: {this.state.count}</p>
        <p><button onClick={this.add}>Add</button><button onClick={this.subtract}>Subtract</button></p>

      </div>
    )
  }
}

