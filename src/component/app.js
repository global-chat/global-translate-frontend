import React, { Fragment } from 'react';
import { Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import ChatWindow from './chat';
import Home from './home';
import Register from './register';
import Login from './login';


function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/chat' component={ChatWindow} />
    </BrowserRouter>
  );
}

export default App;
