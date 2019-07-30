import React from 'react';

class Nav extends React.Component{





  render(){
    return(
      <>
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/chat">Chat</a>
        <a href="/aboutus">About Us</a>
      </nav>
      </>
    )

  }
}

export default Nav;