import React from "react";
import { Router, Switch } from "react-router-dom";
import RoutePath from "./component/route-path";
import Home from "./component/home";
// import AuthenticatedRoute from "./component/AuthenticatedRoute";
import UnauthenticatedRoute from './component/unauthenticatedRoute';
import ChatWindow from './component/chat';
import Register from './component/register';
import Login from './component/login';

export default ({ childProps }) =>
  <Switch>
    <RoutePath path="/" exact component={Home} props={childProps} />
    <RoutePath path='/register' exact component={Register} props={childProps} />
    <UnauthenticatedRoute path='/login' exact component={Login} props={childProps} />
    <RoutePath path='/chat' exact component={ChatWindow} props={childProps}/>
    { /* Finally, catch all unmatched routes */}
    {/* <Route component={NotFound} /> */}
  </Switch>
