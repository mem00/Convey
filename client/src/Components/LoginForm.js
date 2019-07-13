import React, { Component } from "react";


class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="auth-container">
        <h2>login</h2>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleLogin(this.state);
          }}
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
          <hr />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;