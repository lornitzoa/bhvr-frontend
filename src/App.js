import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import Landing from './components/Landing'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // state of authorization
      auth: false,
      familyName: ''
    }
  } // closes constructor

  login = (familyName) => {
    this.setState({
      auth: true,
      familyName: familyName
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
        <div className='App'>
          <h1 className='App-header'>Behaver</h1>
          <div>
            {this.state.auth ?
              <Route
                to='/main'
                render={() =>
                  <Main
                    logout={this.logout}
                    familyName={this.state.familyName}
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
