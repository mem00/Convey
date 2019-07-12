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
    const data = {
        to_id: id,
        from_id: this.state.from_id
    }
    await axios.post(`${API_ROOT}/users/${this.props.userId}/chats`, data, config)
    } else{
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