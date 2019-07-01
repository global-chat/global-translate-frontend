import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatWindow from './chat';
import Home from './home';
import Register from './register';
import Login from './login';
import AboutUs from './aboutus';
import Nav from './nav';
// import './scss/core.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/aboutus" component={ AboutUs } />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            {/* <Route path="/dashboard" component={ dashboard } />
            <Route path="/chatroom" component={ chatroom } />
            <Route exact component={ BadRoute } /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
