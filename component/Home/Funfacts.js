import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import photo5 from '../../public/5.jpeg';
import photo3 from '../../public/3.jpeg';
import photo8 from '../../public/8.jpeg';
import photo10 from '../../public/10.jpeg';

class Funfacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            galleryState: 0,
            boxHeight: '300px',
            funFactImg: 0
        }

        this.handleFunFactImgEnter1 = this.handleFunFactImgEnter1.bind(this);
        this.handleFunFactImgEnter2 = this.handleFunFactImgEnter2.bind(this);
        this.handleFunFactImgEnter3 = this.handleFunFactImgEnter3.bind(this);
        this.handleFunFactImgEnter4 = this.handleFunFactImgEnter4.bind(this);
        this.handleFunFactImgEnter5 = this.handleFunFactImgEnter5.bind(this);
        this.handleFunFactImgLeave = this.handleFunFactImgLeave.bind(this);
    }

    handleFunFactImgEnter1() {
        this.setState({funFactImg: 1});
    }

    handleFunFactImgEnter2(){
        this.setState({funFactImg: 2})
    }

    handleFunFactImgEnter3(){
        this.setState({funFactImg: 3})
    }

    handleFunFactImgEnter4(){
        this.setState({funFactImg: 4})
    }

    handleFunFactImgEnter5(){
        this.setState({funFactImg: 5})
    }

    handleFunFactImgLeave() {
        this.setState({funFactImg: 0});
    }

    render() {
        return(
            <React.Fragment>
            
                <Grid container spacing={1} style={{marginTop:"6%"}}>
                    <Grid item xs={1} sm={2} xl={5}></Grid>
                    <Grid item xs={10} sm={8} xl={2}>
                        <h1 className={styles.funFactsTitle}>Fun Facts</h1>
                    </Grid>
                    <Grid item xs={10} sm={2} xl={5}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <p className={styles.funFactsContent}>
                            Work abroad is not my plan initially, but travel abroad does. During the
                            transition period in 2018, I spent a month traveling in 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleFunFactImgEnter1}
                                onMouseLeave={this.handleFunFactImgLeave}
                            >
                                    &nbsp;#Kyoto&nbsp;
                            </span> 
                            , which is my favorite city (so far) and took an 8-hour bus to 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleFunFactImgEnter2}
                                onMouseLeave={this.handleFunFactImgLeave}
                            >
                                    &nbsp;#Tokyo&nbsp;
                            </span>  
                            to stay another week. I love exploring the world and also my home country 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleFunFactImgEnter3}
                                onMouseLeave={this.handleFunFactImgLeave}
                            >
                                    &nbsp;#Taiwan&nbsp;
                            </span>
                            , where nature is easily accessible. When I was at college, I 
                            applied for the travel & experience program to work as a
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleFunFactImgEnter4}
                                onMouseLeave={this.handleFunFactImgLeave}
                            >
                                    &nbsp;#RideOperator&nbsp;
                            </span>
                            in an amusement park in Pennsylvania, the U.S.A. And now I just moved 
                            to 
                            <span 
                                style={{color:'#8F8F8F'}}
                                onMouseEnter={this.handleFunFactImgEnter5}
                                onMouseLeave={this.handleFunFactImgLeave}
                            >
                                    &nbsp;#Bangkok&nbsp;
                            </span>
                            for 1.5 years, the adventure keeps moving on...
                        </p>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={2} md={4}></Grid>
                    <Grid item xs={8} md={4} className={styles.buttonKnowMoreAboutMe}>
                        <a href='/About' className={styles.viewLink}>KNOW MORE ABOUT ME</a>
                    </Grid>
                    <Grid item xs={2} md={4}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={1} style={{marginTop:"2%"}}>
                            <Grid item xs={12} md={4}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <div className={this.state.funFactImg == 1 || this.state.funFactImg == 0?styles.funFactImgOnHover:styles.funFactImg}>
                                            <img src={photo5} style={{width:"100%"}}/>
                                        </div>
                                        <div className={this.state.funFactImg == 2 || this.state.funFactImg == 0?styles.funFactImgOnHover:styles.funFactImg}>
                                            <img src={photo5} style={{width:"100%"}}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={this.state.funFactImg == 3 || this.state.funFactImg == 0?styles.funFactImgOnHover:styles.funFactImg}>
                                            <img src={photo10} style={{width:"100%"}}/>
                                        </div>
                                        <div className={this.state.funFactImg == 4 || this.state.funFactImg == 0?styles.funFactImgOnHover:styles.funFactImg}>
                                            <img src={photo10} style={{width:"100%"}}/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className={this.state.funFactImg == 5 || this.state.funFactImg == 0?styles.funFactImgOnHover:styles.funFactImg}>
                                    <img src={photo8} style={{width:"100%"}}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className={this.state.funFactImg == 1 || this.state.funFactImg == 0?styles.funFacrImgOnHover:styles.funFactImg}>
                                    <img src={photo3} style={{width:"100%"}}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

            </React.Fragment>
        )
    }
}

export default Funfacts;