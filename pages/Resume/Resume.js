import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title:{
        color:"blue"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.title}>
                About
            </div>
        </React.Fragment>
    )
}

export default Resume;