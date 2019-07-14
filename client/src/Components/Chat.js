import React, {Component} from 'react'
import axios from 'axios'
import {API_ROOT} from '../Constants'
import { ActionCableConsumer} from 'react-actioncable-provider'
import NewMessageForm from './NewMessageForm'
import Card from "@material-ui/core/Card"

import Grid from "@material-ui/core/Grid"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



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
                    <Grid container justify = "center">
                        <Card className="chats">
                            <List>
                                {this.state.messages.map(message=>(
                
                                <List>
                                    <ListItem key={message.id}>{<b>{message.from_username}</b>} </ListItem>
                                    <ListItem>{message.content}</ListItem> 
                                </List>
                                ))}
                            </List>
                            <NewMessageForm chat_id = {this.props.location.state.chat_id} from_id = {this.props.location.state.from_id} to_id = {this.props.location.state.to_id} from_username={this.props.username}/>
                        </Card>
                    </Grid>  
                </div>
           
        )
    }
}


export default Chat