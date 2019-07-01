import React from 'react';
import Nav from './nav';

class Register extends React.Component{
  constructor(props){
    super(props);

      this.state = {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
        photo : "",
        languagePref : ""

    }
  }

  validateForm(){
    return (
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    )
  }

  render(){
    return (
      <>
      <Nav></Nav>
        <div className="register-form">
        <h2 >Register</h2>
        <form>
          <p>First Name <input type="text"/></p>
          <p>Last Name <input type="text"/></p>
          <p>Email <input type="text"/></p>
          <p>Password <input type="text"/></p>
          <p>Confirm Password <input type="text"/></p>
          <p>Photo Upload <input type="file" name="myFile"/></p>
          <p>Language Preferred 
            <select>
              <option></option>
            </select>
            </p>
            <button type="submit">Submit</button>

        </form>
        </div>
      </>
    );
  }

}

export default Register;













