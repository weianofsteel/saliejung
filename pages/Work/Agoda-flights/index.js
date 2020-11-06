import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../../component/Home/Header.js';
import { Footer } from '../../../component/Home/Footer.js';
import styles from '../../../css/Work.module.css';

class AgodaFlights extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                
                <div className={styles.header}>
                    <Header/>
                </div>

                <div className={styles.footer}>
                    <Footer/>
                </div>

            </React.Fragment>
        )
    }
}

export default AgodaFlights;