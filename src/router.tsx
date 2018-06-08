import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginContainer from './components/login/LoginContainer';
import HomeContainer from './components/HomeContainer';
import Is404 from './components/404';

export const routes = (
  <div>
    <Switch>
      <Route exact={true} path="/" component={LoginContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/404" component={Is404} />
    </Switch>
  </div>
);