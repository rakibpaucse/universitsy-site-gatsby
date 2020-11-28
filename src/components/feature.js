import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';

const useStyles = makeStyles((theme) => ({
    featureCards:{
        textAlign : 'center',
        background : 'aliceblue',
        padding : '25px 0'
    },

    card : {
        // borderLeft : '1px solid',
        // background : 'coral'
    },

    icon : {
        fontSize : 110 ,
        color : '#843253'
    },

    heading: {
        fontSize : 30,
        color : 'chocolate'
    },

    details : {
        textAlign : 'justify' , 
        textJustify : 'inter-word' ,
        padding : '10px 30px'
    }

    
}))


const Feature = () => {
    const classes = useStyles();
    return (
        <div style={{width:'70%' , margin : '0 auto'}}>
            <Grid container spacing={3} className={classes.featureCards}>
                <Grid item xs={4} className={classes.card}> 
                    <AcUnitIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Our Vision </h3>
                    <p className={classes.details}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil, magni tempora expedita voluptatibus doloribus! Unde dolorem inventore rerum optio dignissimos eum fugit deleniti porro? </p>
                </Grid>

                <Grid item xs={4} className={classes.card} style={{borderLeft:'1px solid chocolate' , borderRight: '1px solid chocolate'}}> 
                    <ControlCameraIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Our Way  </h3>
                    <p className={classes.details}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio necessitatibus nulla dolore recusandae ea animi illo, minus quo, accusantium temporibus ad explicabo, debitis alias.</p>
                </Grid>

                <Grid item xs={4} className={classes.card}> 
                    <AccountBalanceIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Our Target  </h3>
                    <p className={classes.details}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo qui accusamus autem quis praesentium veniam facilis ducimus, esse architecto a neque non explicabo sunt earum!</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Feature
