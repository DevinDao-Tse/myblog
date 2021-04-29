import React from 'react'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles({
    root: {
        minWidth: 275
    },
    text:{
        textAlign: 'left'
    }
})

export default function SimpleCard(){
    
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <h1>Some Text</h1>
        </Card>
    )
}
