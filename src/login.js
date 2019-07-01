import React from 'react';
import Nav from './nav';


class Login extends React.Component{
 






  render(){
    return(
      <>
      <Nav></Nav>
        <h2>Login</h2>
        <form>
          <p>Username: <input type="text"></input></p>
          <p>Password: <input type="text"></input></p>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}
export default Login;