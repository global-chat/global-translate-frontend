import React, { Fragment } from 'react';
import { Route } from 'react-router';
import ChatWindow from './chat';
import Home from './home';
import Register from './register';
import Login from './login';


function App() {
  return (
  <Fragment>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/chat' component={ChatWindow} />
  </Fragment>
  );
}

export default App;
