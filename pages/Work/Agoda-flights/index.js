import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../../component/Home/Header.js';
import { Footer } from '../../../component/Home/Footer.js';
import styles from '../../../css/Work.module.css';
import Secure from '../../../component/Work/Secure.js';
import flights01 from '../../../public/flights01.png';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>

                <div>
                    <Secure/>
                </div>

                <div className={styles.footer}>
                    <Footer/>
                </div>

            </React.Fragment>
        )
    }
}

export default Page;


 