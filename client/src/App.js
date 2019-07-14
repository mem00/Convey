import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Chats from "./Components/Chats"
import Chat from "./Components/Chat"
import LoginSignup from "./Components/LoginSignup"
import { ActionCableProvider } from "react-actioncable-provider";
import {API_WS_ROOT} from './Constants'
import axios from 'axios'
import decode from 'jwt-decode'
import './App.css'
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/Card'



class App extends Component {
  state = {
    currentUser: {},
    token: ""
  }

  componentDidMount() {  
    const token = localStorage.getItem('jwt')
    if(token){
      this.setState({
        currentUser: decode(token)
      })
    }
  }

  handleLogin = async (data)=> {
    try{
      const res = await axios.post('http://localhost:3000/auth/login', data)
      const {token} = res.data
      localStorage.setItem("jwt", token)
      this.setState({
        currentUser: decode(token),
        token
      })
    }
    catch{
      alert("Invalid credentials. Please try again.")
    }
  }

  handleLogout = () =>{
    localStorage.removeItem('jwt')
    this.setState({
      currentUser: {}
    })
 
  }

  handleSignUp = async  (data)=> {
    try{
      const res = await axios.post('http://localhost:3000/users', data)
      const {token} = res.data
      localStorage.setItem("jwt", token)
      this.setState({
        currentUser: decode(token),
        token: token
      })
    }
    catch{
      alert("Username already exists, please use another.")
    }
  
  }

  userId = this.state.currentUser.id
  
  render() {
    return (

      <Router>
        <div className="App">    
        {this.state.currentUser.user_id ? <Redirect to='/home'/> : <Redirect to='/'/>}  
          <header>
          <nav> {!this.state.currentUser.user_id ? <nav><Link to='/signup'>Sign Up</Link> <Link to='/login'>Log in</Link></nav> : <nav><Link to='/chats'>Chats</Link> <a  onClick={this.handleLogout}> Log Out </a> </nav>}</nav>
           <div>{this.state.currentUser.user_id && `Hello, ${this.state.currentUser.username}.`}</div>
            <h1>
              <Link to="/">
                Convey
              </Link>
            </h1>
          </header>
          <Switch>
            <Route exact path = "/" render={()=> <LoginSignup/>}/>
            <Route exact path = "/home" render={()=> <div>Welcome To Convey</div>}/>
            <Route exact path="/login" render={() => <LoginForm  handleLogin={this.handleLogin} />} />
            <Route exact path="/signup" render={() => <SignUpForm  handleSignUp={this.handleSignUp} />} />
            {this.state.currentUser.user_id ?
              <ActionCableProvider url={API_WS_ROOT+`?user=${this.state.currentUser.user_id}`}>    
                <Route exact path="/chats" render={(props) => <Chats {...props} userId ={this.state.currentUser.user_id} username={this.state.currentUser.username} token={localStorage.getItem('jwt')}/>} />
                <Route exact path="/chat" render={(props) => <Chat {...props} userId ={this.state.currentUser.user_id} username={this.state.currentUser.username} token={localStorage.getItem('jwt')}/>} />
              </ActionCableProvider>
            : null}
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;