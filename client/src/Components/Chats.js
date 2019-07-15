import React, {Component} from "react"
import {Link} from 'react-router-dom'
import { ActionCableConsumer} from 'react-actioncable-provider'
import { API_ROOT} from '../Constants'
import axios from 'axios'
import NewChatForm from './NewChatForm'
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
        const {chats_from, chats_to }= res.data
  
        const chats = chats_from.concat(chats_to)
      
        this.setState({chats})
    }

    handleReceivedChat = res => {
        const {chat} = res;
        console.log(chat)
        this.setState({
            chats: [...this.state.chats, chat]
        })
    }

    render(){
        return(      
            <Grid container justify= "center">         
                {
                //from Tyson
                this.acc ? this.acc : this.acc = <ActionCableConsumer
                channel={{channel: "ChatsChannel"}}
                onReceived={(res) =>this.handleReceivedChat(res)}
                /> 
                }
                <Card className="chats" >
                    <h2 className="title">Chats</h2>
                    <Grid container justify= "center">   
                    <List>
                    {this.state.chats.map(chat => (
                        chat.from_id === this.props.userId ?
                        <ListItem className ="chat" key={chat.id}> <Link to={{pathname: '/chat', state: { chat_id: chat.id, to_id: chat.to_id, from_id: chat.from_id}}}>{chat.to_username}</Link></ListItem>
                        :
                        <ListItem className="chat" key={chat.id}> <Link to={{pathname: '/chat', state: { chat_id: chat.id, to_id: chat.to_id, from_id: chat.from_id}}}>{chat.from_username}</Link></ListItem>
                    ))}
                    </List>
                    </Grid>
                    <NewChatForm userId = {this.props.userId} token ={this.props.token} chats={this.state.chats} from_username={this.props.username}/>
                </Card>
            </Grid>    
        )
    }


}

export default Chats