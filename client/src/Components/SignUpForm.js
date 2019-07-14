import React, { Component } from "react";
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'



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

    if(this.state.password.length < 6 || this.state.passwordConfirm.length < 6) {
      

      alert("Password must be at least 6 characters long.")
      return
    }
    
    this.props.handleSignUp(this.state) 
  }

  render() {
    return (
      <Grid container justify= "center">
      <Card className="signup">
        <h2 className="title">Sign Up</h2>  
        <form
          onSubmit={this.handleSubmit}
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
          <TextField
            variant="outlined"
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <Button variant= "contained" color="primary" type="submit">Sign Up</Button>
        </form>
        <br/>
        <br/>
        <Link to="/login">Already have an account? Login</Link>
     </Card>
    </Grid>    
    );
  }
}

export default SignUpForm;