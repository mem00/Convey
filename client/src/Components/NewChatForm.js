import React, { Component } from "react";
import {API_ROOT} from "../Constants"
import axios from 'axios'

class NewChatForm extends Component {
  constructor(props){
  super(props)
  this.state = {
    username: "",
    from_id: this.props.userId
  };
}

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async(e) => {
    e.preventDefault()
    const config = {
        headers: {
           Authorization: "Bearer " + this.props.token
        }
    }

    const res = await axios.get(`${API_ROOT}/users/${this.state.username}`, config)
    if(res.data) {
      const {id} = res.data
      let chatAlreadyExists = false;

      for(let i = 0; i < this.props.chats.length; i++) {
        if(this.props.chats[i].from_id === id || this.props.chats[i].to_id === id){
          chatAlreadyExists = true
          break
        }
      }
      if(!chatAlreadyExists){
        const data = {
            to_id: id,
            from_id: this.state.from_id,
            from_username: this.props.from_username,
            to_username: this.state.username
        }

        await axios.post(`${API_ROOT}/users/${this.props.userId}/chats`, data, config)
    }
    else{
      console.log("hy1")
      alert("You already have a chat with this user!")
    }
    } 
    else{
        alert("Sorry, user does not exist. Please tell them to signup!")
    }
    this.setState({
        username: ""
    })
  }

  render() {
    return (
      <div>
        <h2>create chat</h2>
        <hr />
        <form
          onSubmit={this.handleSubmit}
         >
          <p>To</p>
          <input
            name="username"
            type="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <hr />
          <button>Create Chat</button>
        </form>
      </div>
    );
  }
}

export default NewChatForm;