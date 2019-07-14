import React, { Component } from "react";
import {API_ROOT} from "../Constants"
import axios from 'axios'
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"

class NewMessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        chat_id: this.props.chat_id,
        content: "",
        from_username: this.props.from_username
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
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            name="content"
            type="text"
            placeholder="message"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <Button variant="contained" color="primary" type="submit">Send</Button>
          <br/>
          <br/>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;