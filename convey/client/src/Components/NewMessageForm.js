import React, { Component } from "react";
import {API_ROOT} from "../Constants"
import axios from 'axios'

class NewMessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        chat_id: this.props.chat_id,
        content: ""
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
    await axios.post(`${API_ROOT}/users/${this.props.from_id}/chats/${this.props.to_id}/messages`, this.state, config)
  }

  render() {
    return (
      <div>
        <h2>create message</h2>
        <hr />
        <form
          onSubmit={this.handleSubmit}>
          <input
            name="content"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />

          <hr />
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;