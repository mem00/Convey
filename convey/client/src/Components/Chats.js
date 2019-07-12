import React, {Component} from "react"
import {Link} from 'react-router-dom'
import { ActionCableConsumer} from 'react-actioncable-provider'
import { API_ROOT} from '../Constants'
import axios from 'axios'
import NewChatForm from './NewChatForm'

class Chats extends Component {
    state = {
        chats:[],
        activeConversation: null,
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
                        <li key={chat.id}> <Link to={{pathname: '/chat', state: { chat_id: chat.id, to_id: chat.to_id, from_id: chat.from_id}}}>{chat.to_id}</Link></li>
                     ))}
                    </ul>
                    <NewChatForm userId = {this.props.userId} token ={this.props.token}/>
                </div>
          
            
        )
    }


}

export default Chats