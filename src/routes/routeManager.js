import React from "react";
import { Switch } from "react-router-dom";
import RoutePath from "./route-path";
import Home from "../webpages/home";
import AuthenticatedRoute from "./authenticatedRoute";
import UnauthenticatedRoute from './unauthenticatedRoute';
import ChatWindow from '../webpages/chat';
import Register from '../webpages/register';
import Login from '../webpages/login';
import AboutUs from '../webpages/aboutus';

//https://serverless-stack.com/chapters/setup-secure-pages.html
//used this tutorial handle secured routing

export default ({ childProps }) =>
  <Switch>
    <RoutePath path="/" exact component={Home} props={childProps} />
    <RoutePath path='/register' exact component={Register} props={childProps} />
    <UnauthenticatedRoute path='/login' exact component={Login} props={childProps} />
    <AuthenticatedRoute path='/chat' exact component={ChatWindow} props={childProps}/>
    <RoutePath path="/aboutus" exact component={AboutUs} props={childProps}/>
  </Switch>
