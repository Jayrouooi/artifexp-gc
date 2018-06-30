import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router'

import App from './container/App/'

export default () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <App />
    </Switch>
  </Router>
)
