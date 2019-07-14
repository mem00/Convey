import React from 'react'
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'
import {Link} from "react-router-dom"


const useStyles = makeStyles({
    root: {
        height: '200px',
        width: '220px',     
    }
  })

function LoginSignup(){

   const classes = useStyles();
    return(
        <Grid container justify= "center">
            <Card className={classes.root}> 
                    <h3 className="title">Convey</h3>    
                    <Button variant= "contained" color="primary"><Link to='/signup' className="button-white">Sign Up</Link></Button>
                    <br/>
                    <br/>
                    <Button variant= "contained" color="primary"><Link to='/login' className="button-white">Login</Link></Button>      
            </Card>
        </Grid>

    )


}

export default LoginSignup