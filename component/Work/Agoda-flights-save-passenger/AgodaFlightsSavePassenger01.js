import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import agodaFlightsSavePassengerHeader from '../../../public/agoda-flights-save-passenger/agodaFlightsSavePassenger-header.jpg';

export const AgodaFlightsSavePassenger01 = () => {
    
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={agodaFlightsSavePassengerHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        Agoda Flights  
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        A Simple Click to Complete the Booking for Revisiting Customers
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>OBJECTIVE&nbsp;&nbsp;</span>
                        After we launched the MVP of Agoda Flights, we started looking for opportunities to optimize the product. We found the drop off rate is higher than the accommodation side. We assumed that the passenger details form might be the reason. Customers need to fill the form every time they come back since we don’t save anything in the account for later use. 
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span>
                        Considering the resources and priorities, we kept changing the objective of this feature along the way. It is my job to make sure we still focus on the problem we tried to solve. Especially, when there were different product managers with a different mindset of it.
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>RESPONSIBILITIES&nbsp;&nbsp;</span>
                        I worked with three product managers due to changing goals. Initially, we land on a quick solution. However, to consider a long term goal, I created multiple iterations and have frequent discussions with engineers.
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>OUTCOME&nbsp;&nbsp;</span>
                        After we introduced the feature, there is a 2% improvement in the micro-conversion rate that customers complete the passenger detail form and go to the payment step. We also found 60% of customers opting to save their traveler details for later use.
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}