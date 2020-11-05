import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaKey } from '../../component/config';
import styles from '../../css/Writing.module.css';

const useStyles = makeStyles((theme) => ({
    title:{
        color:"blue",
        fontFamily:"Inter",
        fontSize:"60px"
    }
}));

export default function Writing  (props)  {
    
    const classes = useStyles();

    const [recaptchaToken, setRecaptchaToken] = React.useState("");

    const reCaptchaOnChange = (value) => {
        setRecaptchaToken(value);
    }

    return(
        <React.Fragment>
            <div className={styles.title}>
                Writing
            </div>
            <div>
            <ReCAPTCHA
                required
                sitekey={recaptchaKey}
                size="large"
                badge="inline"
                hl="zh-TW"
                onChange={reCaptchaOnChange}
                style={{width:"100%"}}
            />
            </div>
        </React.Fragment>
    )
}
