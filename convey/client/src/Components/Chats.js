import React, {Component} from "react"
import {Link} from 'react-router-dom'
import { ActionCableConsumer} from 'react-actioncable-provider'
import { API_ROOT} from '../Constants'
import axios from 'axios'
import NewChatForm from './NewChatForm'
import Chat from './Chat'
import { ActionCableProvider } from "react-actioncable-provider";
import {API_WS_ROOT} from '../Constants'

const acc = ""

class Chats extends Component {
    state = {
        chats:[],
        activeChat: {},
    }

    async componentDidMount(){
        const config = {
            headers: {
               Authorization: "Bearer " + this.props.token
            }
         }
        const res = await axios.get(`${API_ROOT}/users/${this.props.userId}/chats`, config)
        const chats = res.data.chats_from
        this.setState({chats})
    }

    handleReceivedChat = res => {
        console.log('fire')
        const {chat} = res;
        this.setState({
            chats: [...this.state.chats, chat]
        })
    }

    openChat = activeChat => {
        this.setState({activeChat})
    }

    render(){

        return(      
                <div>
                    {
                    //from Tyson
                    this.acc ? this.acc : this.acc = <ActionCableConsumer
                    channel={{channel: "ChatsChannel"}}
                    onReceived={(res) =>this.handleReceivedChat(res)}
                    /> 
                    }
                    <h1>Chats</h1>
                    <ul>
                    {this.state.chats.map(chat => (
                        <li key={chat.id} onClick={()=>this.openChat(chat)}>{chat.to_id}</li>
                     ))}
                    </ul>
                    <NewChatForm userId = {this.props.userId} token ={this.props.token}/>

                    {this.state.activeChat.id ? <Chat token = {this.props.token} chat_id={this.state.activeChat.id} to_id={this.state.activeChat.to_id} from_id={this.state.activeChat.from_id} /> : null}
                </div>
          
            
        )
    }
}

export default Chats