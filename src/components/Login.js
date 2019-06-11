import React, { Component } from 'react'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyName: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.familyName)

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='familyName'>Family Name</label>
          <input type='text' id='familyName' onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Login
