import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AgodaFlights } from './AgodaFlights.js';
import { Header } from '../../component/Home/Header.js';
import { Scrollup } from '../Public/Scrollup';

class Secure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            errorMessage: "",
            isPass: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.setStateByName = this.setStateByName.bind(this);
        this.recursiveReplaceValueByName = this.recursiveReplaceValueByName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e,callBack,nullValue=null) {
        const {value, name} = e.target;
        if (typeof callBack !=="function"){
            callBack = function() {}
        }
        this.setStateByName(name, value!==""?value:null, callBack);
    }

    setStateByName(name, value, callBack) {
        this.setState(function(prevState) {
            return this.recursiveReplaceValueByName(name, prevState, value);
        },callBack)
    }

    recursiveReplaceValueByName(name,object,value)
    {
        var keysArr = name.replace(/\[/g,".").replace(/\]/g,"").split(".");

        var target = object;

        for (var i = 0; i < keysArr.length; i++){
            let key = keysArr[i];
            if (!target.hasOwnProperty(key)){
                return object;
            }

            if (i == keysArr.length - 1) {
                target[key] = value;
            }

            target = target[key];
        }

        return object;
    }

    handleSubmit() {
        if(this.state.password == '20180801'){
            this.setState({
                password: "",
                isPass: true,
                errorMessage: ""
            })
        } else {
            this.setState({errorMessage: 'Enter Correct Password'})
        }
    }

    render(){
        return(
            <React.Fragment>

                
                {this.state.isPass == false?

                    <React.Fragment>    
                        <div>
                            <Header/>
                        </div>

                        <div className={styles.main}>
                            
                            <span className={styles.title}>
                                Secure area
                            </span>
                            <br/>
                            <br/>
                            <span className={styles.description}>
                                Please ask the password for permission.
                            </span>

                            <Grid container className={styles.password}>
                                <Grid item xs={10} sm={6} md={3}>
                                    <TextField 
                                        id="password" 
                                        label="Enter password" 
                                        variant="outlined"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        onKeyDown={(e)=>{
                                            if(e.keyCode === 13){
                                                this.handleSubmit();
                                            }
                                        }}
                                        helperText={this.state.errorMessage} 
                                        style={{width:"100%"}}
                                        InputProps={{
                                            endAdornment: (
                                            <InputAdornment>
                                                <IconButton onClick={this.handleSubmit}>
                                                    <ArrowForwardIcon />
                                                </IconButton>
                                            </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                            </Grid>

                        </div>
                    </React.Fragment>: ""
                }

                {this.state.isPass == true?
                
                    <React.Fragment>
                        <div  className={styles.header}>
                            <Header/>
                        </div>

                        <Grid container style={{top:'70%',position:'fixed'}}>
                            <Grid item xs={4} md={7}></Grid>
                            <Grid item xs={5} md={4}>
                                <Scrollup/>
                            </Grid>
                        </Grid>
                        
                        <div>
                            <AgodaFlights/>
                        </div>
                    </React.Fragment>
            
                :""}
            
            </React.Fragment>
        )
    }
}

export default Secure;