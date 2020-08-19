import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title:{
        color:"blue",
        fontFamily:"Asap",
        fontSize:"60px"
    }
}));

const Writing = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.title}>
                Writing
            </div>
        </React.Fragment>
    )
}

export default Writing;