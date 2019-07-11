import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {ActionCable} from 'react-actioncable-provider'
import { API_ROOT} from '../Constants'
import axios from 'axios'


class Chats extends Component {
    state = {
        chats:[],
        activeConversation: null
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

    render(){
        const chats = this.state.chats.map(chat => (
            <li key={chat.id}> <Link to={{pathname: '/chat', state: { chat_to: chat.to_id, chat_from: chat.from_id}}}>{chat.to_id}</Link></li>
        ))
        return(
            <div>
                <h1>Chats</h1>
                <ul>
                    {chats}
                </ul>
            </div>

        )
    }


}

export default Chats