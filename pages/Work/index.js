import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Banner } from '../../component/Home/Banner.js'; 

const useStyles = makeStyles((theme) => ({
    title:{
        color:"blue",
        fontSize:"50px"
    }
}));

const Work = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div>
                <Banner/>
            </div>
        </React.Fragment>
    )
}

export default Work;