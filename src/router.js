import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router'
import Map from './container/Map'
import User from './container/User'
import App from './container/App/'
import Dashboard from './container/Dashboard'
import TaskView from './container/TaskView'
import ReportNew from './container/ReportNew'
import Explore from './container/Explore'
import JobHistory from './container/JobHistory'

export default () => (
  <Router history={createBrowserHistory()}>
    <App>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/task/:task_id" component={TaskView} />
        <Route exact path="/report-placememnt" component={ReportNew} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/user" component={User} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/earning" component={JobHistory} />
      </Switch>
    </App>
  </Router>
)
