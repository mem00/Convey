import React, { Component } from "react";
import {API_ROOT} from "../Constants"
import axios from 'axios'

class LoginForm extends Component {
  constructor(props){
  super(props)
  this.state = {
    to_id: null,
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
    await axios.post(`${API_ROOT}/users/${this.props.userId}/chats`, this.state, config)
  }

  render() {
    return (
      <div>
        <h2>create message</h2>
        <hr />
        <form
          onSubmit={this.handleSubmit}
         >
          <p>To</p>
          <input
            name="to_id"
            type="number"
            value={this.state.to_id}
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