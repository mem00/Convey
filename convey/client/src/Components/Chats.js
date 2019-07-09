import React, {Component} from "react"
import axios from 'axios'


class Chats extends Component {
    state = {
        chats:[]
    }

    async componentDidMount(){
        const config = {
            headers: {
               Authorization: "Bearer " + this.props.token
            }
         }
         console.log(config)
        const res = await axios.get(`http://localhost:3000/users/${this.props.userId}/chats`, config)
        const chats = res.data
        this.setState({chats})
    }

    render(){

        return(
            <div>Chats</div>
        )
    }


}

export default Chats