import React from "react";
import { Route } from "react-router-dom";

//https://serverless-stack.com/chapters/setup-secure-pages.html
//used this tutorial handle secured routing

export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
