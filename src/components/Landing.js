import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

class Landing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>

          <Route
            path='/login'
            render={() =>
            <Login
              login={this.props.login}
            />
          } />
          <Route
            path='/register'
            render={() =>
              <Register />
            }
          />
        </div>
      </Router>

    )
  }
}

export default Landing
