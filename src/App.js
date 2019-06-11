import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import Landing from './components/Landing'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // state of authorization
      auth: false
    }
  } // closes constructor

  login = () => {
    this.setState({
      auth: true
    })
  }

  logout = () => {
    this.setState({
      auth: false
    })
  }


  render() {
    return (
      <Router>
        <div class='App'>
          <h1 class='App-header'>Behaver</h1>
          <div>
            {this.state.auth ?
              <Route
                to='/main'
                render={() =>
                  <Main
                    logout={this.logout}
                  />
                }
              />

              :
              <Route
                to='/landing'
                render={() =>
                  <Landing
                    login={this.login}
                  />
                }
              />
            }
          </div>
        </div>
      </Router>
    )
  }

} // this closes App class

export default App;
