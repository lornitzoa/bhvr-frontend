import React, { Component } from 'react'
import PinInput from 'react-pin-input'
import {Redirect} from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyName: '',
      password: '',
      pin: '',
      redirectToReferrer: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      redirectToReferrer: true
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handlePin = (e) => {
    this.setState({
      pin: e
    })
  }

  render() {
    if (this.state.redirectToReferrer) return <Redirect to='/login'/>
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='familyName'>Family Name</label>
          <input type='text' id='familyName' onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={this.handleChange}/>
          <PinInput
            length={4}
            secret
            onChange={this.handlePin}
            id='pin'
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Register
