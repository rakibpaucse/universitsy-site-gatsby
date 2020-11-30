import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
    featureCards:{
        textAlign : 'center',
        background : '#f5f5dc',
        padding : '25px 0'
    },

    card : {
        // borderLeft : '1px solid',
        // background : 'coral'
    },

    icon : {
        fontSize : 70 ,
        color : '#843253'
    },

    heading: {
        fontSize : 30,
        color : 'black'
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
                    <PeopleAltOutlinedIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Total Student </h3>
                    <CountUp end={750} duration={5} style={{fontSize : 35}}/>

                </Grid>

                <Grid item xs={4} className={classes.card} style={{borderLeft:'1px solid chocolate' , borderRight: '1px solid chocolate'}}> 
                    <LocalLibraryOutlinedIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Total Credit </h3>
                    <CountUp end={145} duration={5} style={{fontSize : 35}}/>

                </Grid>

                <Grid item xs={4} className={classes.card}> 
                    <EmojiEventsIcon className={classes.icon}/>
                    <h3 className={classes.heading}> Total Alumni  </h3>
                    <CountUp end={8500} duration={5} style={{fontSize : 35}}/>

                </Grid>
            </Grid>
        </div>
    )
}

export default Feature
