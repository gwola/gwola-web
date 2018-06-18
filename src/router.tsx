import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './components/login/LoginContainer';
import Dashboard from './components/dashboard/DashboardContainer';

export const routes = (
  <Switch>
    <Route
      exact={true}
      path="/"
      render={() => <Redirect to="/login" />}
    />
    <Route exact={true} path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
