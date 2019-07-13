import React, { Component } from "react";



class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.password !== this.state.passwordConfirm ) {
       alert("Passwords Do Not Match")
       
       return this.setState({
           password:"",
           passwordConfirm:""
       })

    }
    
    this.props.handleSignUp(this.state)
   
  }

  render() {
    return (
      <div className="auth-container">
        <h2>Sign up</h2>
        <hr />
        <form
          onSubmit={this.handleSubmit}
        >
          <p>Username:</p>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
            <p>Confirm Password</p>
           <input
            name="passwordConfirm"
            type="password"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />

          <hr />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;