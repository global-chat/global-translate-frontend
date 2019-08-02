
import React from "react";
import { Route, Redirect } from "react-router-dom";

//https://serverless-stack.com/chapters/setup-secure-pages.html
//used this tutorial handle secured routing

export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location
              .search}`}
          />}
  />;