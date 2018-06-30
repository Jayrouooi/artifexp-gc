import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router'
import Map from './container/Map'
import User from './container/User'
import App from './container/App/'

export default () => (
  <Router history={createBrowserHistory()}>
    <App>
      <Switch>
        <Route exact path="/user" component={User} />
        <Route exact path="/map" component={Map} />
      </Switch>
    </App>
  </Router>
)
