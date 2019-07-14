import React, {Component} from 'react'
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"


class LoginSignup extends Component {

    render(){
        return(
            <Card>
                <CardContent>
                   <Button><Link to='/signup'>Sign Up</Link></Button>
                   <Button><Link to='/login'>Log in</Link></Button>
                </CardContent>

            </Card>

        )
    }

}

export default LoginSignup