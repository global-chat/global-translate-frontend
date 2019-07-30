import React from "react";
import { Router, Switch } from "react-router-dom";
import RoutePath from "./webpages/route-path";
import Home from "./webpages/home";
// import AuthenticatedRoute from "./component/AuthenticatedRoute";
import UnauthenticatedRoute from './webpages/unauthenticatedRoute';
import ChatWindow from './webpages/chat';
import Register from './webpages/register';
import Login from './webpages/login';
import AboutUs from './webpages/aboutus';

export default ({ childProps }) =>
  <Switch>
    <RoutePath path="/" exact component={Home} props={childProps} />
    <RoutePath path='/register' exact component={Register} props={childProps} />
    <UnauthenticatedRoute path='/login' exact component={Login} props={childProps} />
<<<<<<< HEAD
    <RoutePath path='/chat' exact component={ChatWindow} props={childProps}/>
=======
    <RoutePath path="/aboutus" exact component={AboutUs}/>
    {/* <AuthenticatedRoute path='/chat' exact component={ChatWindow} props={childProps}/> */}
>>>>>>> e2a289719d6f6e9061248b7957de173fb3b65a91
    { /* Finally, catch all unmatched routes */}
    {/* <Route component={NotFound} /> */}
  </Switch>
