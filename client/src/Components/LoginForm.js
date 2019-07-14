import React, { Component } from "react";
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'



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
      <Grid container justify= "center">
        <Card className="login">
        <h2 className = "title">Login</h2>
    
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleLogin(this.state);
          }}
        >
          <TextField
            variant="outlined"
            name="username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <TextField
            variant="outlined"
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <Button variant= "contained" color="primary">Login</Button>  
        </form>
        <br/>
        <br/>
        <Link to="/signup">Don't have an account? Sign Up</Link>
        </Card>
      </Grid>
    );
  }
}

export default LoginForm;