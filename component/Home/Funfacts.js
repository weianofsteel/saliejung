import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Button from '@material-ui/core/Button';
import photo5 from '../../public/5.jpeg';
import photo3 from '../../public/3.jpeg';
import photo8 from '../../public/8.jpeg';
import photo10 from '../../public/10.jpeg';

class Funfacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            galleryState: 0,
            boxHeight: "300px"
        }

        this.handleOnMouseEnter1 = this.handleOnMouseEnter1.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleOnMouseEnter2 = this.handleOnMouseEnter2.bind(this);
        this.handleOnMouseEnter3 = this.handleOnMouseEnter3.bind(this);
        this.handleOnMouseEnter4 = this.handleOnMouseEnter4.bind(this);
        this.handleOnMouseEnter5 = this.handleOnMouseEnter5.bind(this);
    }

    handleOnMouseEnter1(){
        this.setState({galleryState: 1})
    }

    handleOnMouseLeave(){
        this.setState({galleryState: 0})
    }

    handleOnMouseEnter2(){
        this.setState({galleryState: 2})
    }

    handleOnMouseEnter3(){
        this.setState({galleryState: 3})
    }

    handleOnMouseEnter4(){
        this.setState({galleryState: 4})
    }

    handleOnMouseEnter5(){
        this.setState({galleryState: 5})
    }

    render() {
        return(
            <React.Fragment>
            
                <Grid container spacing={1} style={{marginTop:"6%"}}>
                    <Grid item xs={3} xl={5}></Grid>
                    <Grid item xs={6} xl={2}>
                        <h1 className={styles.funFactsTitle}>Fun Facts</h1>
                    </Grid>
                    <Grid item xs={3} xl={5}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <p className={styles.funFactsContent}>
                            Work abroad is not my plan initially, but travel abroad does. During the
                            transition period in 2018, I spent a month traveling in 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleOnMouseEnter1}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Kyoto&nbsp;
                            </span> 
                            , which is my favorite city (so far) and took an 8-hour bus to 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleOnMouseEnter2}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Tokyo&nbsp;
                            </span>  
                            to stay another week. I love exploring the world and also my home country 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleOnMouseEnter3}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Taiwan&nbsp;
                            </span>
                            , where nature is easily accessible. When I was at college, I 
                            applied for the travel & experience program to work as a
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleOnMouseEnter4}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#RideOperator&nbsp;
                            </span>
                            in an amusement park in Pennsylvania, the U.S.A. And now I just moved 
                            to 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleOnMouseEnter4}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Bangkok&nbsp;
                            </span>
                            for 1.5 years, the adventure keeps moving on...
                        </p>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} className={styles.buttonKnowMoreAboutMe}>
                        <a href='/About' className={styles.viewLink}>KNOW MORE ABOUT ME</a>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                {this.state.galleryState == 0 ?
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={1} style={{marginTop:"2%"}}>
                                <Grid item xs={3}>
                                    <div>
                                        <img src={photo10} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <img src={photo5} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <img src={photo8} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <img src={photo3} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid> : ""
                }

                {this.state.galleryState == 1 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock1}></div> */}
                            <div>
                                <img src={photo10} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 2 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock2}></div> */}
                            <div>
                                <img src={photo5} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 3 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock3}></div> */}
                            <div>
                                <img src={photo8} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 4 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock4}></div> */}
                            <div>
                                <img src={photo3} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 5 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <div>
                                <img src={photo3} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

            </React.Fragment>
        )
    }
}

export default Funfacts;