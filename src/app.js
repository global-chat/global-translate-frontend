import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router';
import ChatWindow from './chat';
// import Home from './home';
// import Register from './register';
// import Login from './login';


// function App() {
//   return (
  // <Router>
  //   <Route exact path='/' component={Home} />
  //   <Route path='/register' component={Register} />
  //   <Route path='/login' component={Login} />
  //   <Route path='/chat' component={ChatWindow} />
  // </Router>
//   <ChatWindow/>
//     <Reac
//   );
// }

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/chatroom" component={ Chatroom } />
            <Route exact component={ BadRoute } />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
