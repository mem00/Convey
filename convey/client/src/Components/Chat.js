import React, {Component} from 'react'
import axios from 'axios'
import {API_ROOT} from '../Constants'
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
        const res = await axios.get(API_ROOT + `/users/${this.props.location.state.from_id}/chats/${this.props.location.state.to_id}/messages`, config)
        const messages = res.data
        this.setState({messages})
    }

    handleReceivedMessage = res => {
        const {message} = res;
        this.setState({
            messages: [...this.state.messages, message]
        })
    }
    render(){
    
        return(
       
            <div>
    
               {     //from Tyson
               
                this.acc ? this.acc : this.acc = <ActionCableConsumer
                // key={this.props.location.state.id}  
                channel={{channel: "MessagesChannel", to_id: this.props.location.state.to_id, from_id: this.props.location.state.from_id }}
                onReceived={(res) =>this.handleReceivedMessage(res)}
                /> }
                    <ul>
                        {this.state.messages.map(message=>(
                        <li key={message.id}>{message.from_username}:{<br/>}{message.content}</li> 
                        ))}
                    </ul>
                    <NewMessageForm chat_id = {this.props.location.state.chat_id} from_id = {this.props.location.state.from_id} to_id = {this.props.location.state.to_id} from_username={this.props.username}/>
                </div>
           
        )
    }
}


export default Chat