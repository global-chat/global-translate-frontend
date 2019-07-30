import React, { Component } from 'react';
import Routes from './routeManager';
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      userName: null,
      userToken: null,
    };
  }

  async componentDidMount() {
    try {
      const user = await Auth.currentSession();
      this.setState({user:user});
      this.authenticateUser(true);
      this.setState({userName: user["accessToken"].payload.username, userToken: user["accessToken"].jwtToken})
    }
    catch(e) {
      if (e === 'No current user') {
        alert(e);
      }
    }
    this.setState({ isAuthenticating: false });
  }

  authenticateUser = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUserName = user => {
    this.setState({ userName: user });
  }

  setUserToken = userToken => {
    this.setState({ userToken: userToken });
  }

  onLogout = async event => {
    try {
    await Auth.signOut();

    this.authenticateUser(false);
    this.setUserName(null);
    this.setUserToken(null);

    this.props.history.push("/login");
    } catch(e) {
      alert(e);
    }
  }

  render() {
    const authentication = {
      isAuthenticated: this.state.isAuthenticated,
      authenticateUser: this.authenticateUser,
      logoutUser: this.onLogout,
      userName: this.state.userName,
      userToken: this.state.userToken,
      setUserName: this.setUserName,
      setUserToken: this.setUserToken
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Routes childProps={authentication} />
      </div>
    );
  }
}

export default withRouter(App);