import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import ChildrenDashboard from './ChildrenDashboard'
import ManageHousehold from './ManageHousehold'
import ManageTBs from './ManageTBs'
import ManageCashins from './ManageCashins'


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <button onClick={this.props.logout}>Logout</button>
          <h2>{this.props.familyName} Family Dashboard</h2>
          <div>
            <nav className='nav-list'>
              <li>
                <Link className='nav-link' to='/children-dashboard'>
                  Children Overview
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/manage-household'>
                  Manage Household
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/manage-tasks-behaviors'>
                  Manage behaviors
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/manage-cashins'>
                  Manage Cashins
                </Link>
              </li>
            </nav>
            <Route
              path='/children-dashboard'
              component={ChildrenDashboard}
            />
            <Route
              path='/manage-household'
              component={ManageHousehold}
            />
            <Route
              path='/manage-tasks-behaviors'
              component={ManageTBs}
            />
            <Route
              path='/manage-cashins'
              component={ManageCashins}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default Main
