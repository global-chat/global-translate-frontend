import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatWindow from './chat';
import Home from './home';
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
            {/* <Route path="/about" component={ about } />
            <Route path="/login" component={ login } />
            <Route path="/register" component={ register } />
            <Route path="/dashboard" component={ dashboard } />
            <Route path="/chatroom" component={ chatroom } />
            <Route exact component={ BadRoute } /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
