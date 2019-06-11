import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={this.props.logout}>Logout</button>
        <h2>{this.props.familyName} Dashboard</h2>
      </div>
    )
  }
}

export default Main
