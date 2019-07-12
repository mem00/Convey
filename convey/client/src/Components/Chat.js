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
        const res = await axios.get(API_ROOT + `/users/${this.props.from_id}/chats/${this.props.to_id}/messages`, config)
        const messages = res.data
        this.setState({messages})
    }

    handleReceivedMessage = res => {
        console.log("fire")
        console.log(res)
        const {message} = res;
        this.setState({
            messages: [...this.state.messages, message]
        })
    }
    render(){
        console.log(this.props.to_id, this.props.from_id)
        return(
       
            <div>
    
               {     //from Tyson
               
                this.acc ? this.acc : this.acc = <ActionCableConsumer
                // key={this.props.location.state.id}  
                channel={{channel: "MessagesChannel", to_id: this.props.to_id, from_id: this.props.from_id }}
                onReceived={(res) =>this.handleReceivedMessage(res)}
                /> }
                    <ul>
                        {this.state.messages.map(message=>(
                        <li key={message.id}>{message.content}</li> 
                        ))}
                    </ul>
                    <NewMessageForm chat_id = {this.props.chat_id} from_id = {this.props.from_id} to_id = {this.props.to_id} />
                </div>
           
        )
    }
}


export default Chat