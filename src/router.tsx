import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './components/login/LoginContainer';
import Test from './components/test/testContainer';
import Test2 from './components/test2/test2Container';
import Test3 from './components/test3/test3Container';

export const routes = (
  <Switch>
    <Route
      exact={true}
      path="/"
      render={() => <Redirect to="/login" />}
    />
    {/* <Route exact={true} path="/" component={Test} /> */}
    <Route path="/login" component={Login} />
    <Route path="/test" component={Test} />
    <Route path="/test2" component={Test2} />
    <Route path="/test3" component={Test3} />
  </Switch>
);