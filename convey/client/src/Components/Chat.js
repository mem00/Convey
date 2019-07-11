import React, {Component} from 'react'
import axios from 'axios'
import {API_ROOT} from '../Constants'
import { ActionCableProvider } from "react-actioncable-provider";
import {API_WS_ROOT} from '../Constants'
import { ActionCableConsumer} from 'react-actioncable-provider'
import NewMessageForm from './NewMessageForm'



class Chat extends Component{
    state = {
        messages : []
    }

    async componentDidMount() {
        const config = {
            headers: {
               Authorization: "Bearer " + this.props.token
            }
         }
        const res = await axios.get(API_ROOT + `/users/${this.props.location.state.chat_from}/chats/${this.props.location.state.chat_to}/messages`, config)
        const messages = res.data
        this.setState({messages})
    }

    handleReceivedMessage = res => {
        console.log("fire")
        const {message} = res;
        this.setState({
            messages: [...this.state.messages, message]
        })
    }
    render(){
        return(
            <ActionCableProvider url={API_WS_ROOT+`?user=${this.props.userId}`}>  
               {     //from Tyson
                this.acc ? this.acc : this.acc = <ActionCableConsumer
                key={this.props.location.state.id}  
                channel={{channel: "MessagesChannel", chat: this.props.location.state.id}}
                onReceived={(res) =>this.handleReceivedMessage(res)}
                /> }
                
                <div>

                    <ul>
                        {this.state.messages.map(message=>(
                        <li key={message.id}>{message.content}</li> 
                        ))}
                    </ul>
                    <NewMessageForm chat_id = {this.props.location.state.id} from_id = {this.props.location.state.chat_from} to_id = {this.props.location.state.chat_to} />
                </div>
            </ActionCableProvider>
        )
    }
}


export default Chat