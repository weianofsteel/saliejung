import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Writing.module.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class Secure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            errorMessage: ""
        }
    }

    render(){
        return(
            <React.Fragment>

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
                        <Grid item xs={3}>
                            <TextField 
                                id="password" 
                                label="Enter password" 
                                variant="outlined"
                                name="password"
                                value={this.state.password}
                                helperText={this.state.errorMessage} 
                                style={{width:"100%"}}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <IconButton>
                                          <ArrowForwardIcon />
                                        </IconButton>
                                      </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>

                </div>
            
            </React.Fragment>
        )
    }
}

export default Secure;