import React, { Component } from "react";
import {API_ROOT} from "../Constants"
import axios from 'axios'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import Modal from 'react-modal'


const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NewChatForm extends Component {
  constructor(props){
  super(props)
  this.state = {
    username: "",
    from_id: this.props.userId,
    showModal: false
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
        this.setState({
          showModal: false
        })
    }
    else{
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

  handleOpenModal = () =>{
    this.setState({
        showModal : true
    });
 }

 handleCloseModal = () =>{
    this.setState({
        showModal : false
    });
 }

  render() {
    return (
      <div>
      <Fab  onClick={this.handleOpenModal} color="primary" aria-label="Add"  >
        <AddIcon />
      </Fab>
      <Modal
        ariaHideApp={false}
        isOpen={this.state.showModal}
        contentLabel="onRequestClose "
        onRequestClose={this.handleCloseModal}
        style = {customStyles}>
        <Grid container justify="center">
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              name="username"
              type="username"
              placeholder="recipient"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" type="submit">Create Chat</Button>
          </form>
        </Grid>
      </Modal>
      </div>
    );
  }
}

export default NewChatForm;