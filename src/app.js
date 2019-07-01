import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatWindow from './chat';
// import Home from './home';
import Register from './register';
import Login from './login';
import AboutUs from './aboutus';


function App() {
  return (
  <Router>
  {/* //   <Route exact path='/' component={Home} /> */}
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    {/* <Route path='/chat' component={ChatWindow} />  */}
    {/* <Route path='./aboutus' component ={AboutUs} */}
  </Router>
  );
}

export default App;
