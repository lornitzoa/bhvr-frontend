import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

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
                <NavLink className='nav-link' activeClassName='active-nav' to='/children-dashboard'>
                  Children Overview
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-link' activeClassName='active-nav' to='/manage-household'>
                  Manage Household
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-link' activeClassName='active-nav' to='/manage-tasks-behaviors'>
                  Manage behaviors
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-link' activeClassName='active-nav' to='/manage-cashins'>
                  Manage Cashins
                </NavLink>
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
