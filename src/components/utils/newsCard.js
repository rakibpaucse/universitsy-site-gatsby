import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import n1 from '../../images/n1.jpg'
import n2 from '../../images/n2.jpg'
import n3 from '../../images/n3.jpg'
import n4 from '../../images/n4.jpg'


const img = [ 
    {pic: n1 , title : 'Honorable Mention in ACM ICPC  in 2018'},
    {pic : n2 , title : '2ND RUNNERS UP in FAB FEST 2018 at Dhaka University'} , 
    {pic : n3 , title : 'Joining ICCIT Scientific Conference 2018'},
    {pic : n4 , title : 'Workshop on Cyber Security on IQAC Office on 2018'}
 ]

const useStyles = makeStyles({
  root: { 
    maxWidth: 345,
  },
  media: {
    height: 180
  },
  card: {
    width : '100%',
    
  },
  holder: {
    width : '100%',
    margin : '0 auto',
    padding: '20px 0px'
},
});

export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className={classes.card}>
    <Grid container spacing={5} className={classes.holder}>
        {
            img.map( im => (
                <Grid item xs={6} >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={im.pic}
                        title="events"
                        />
                        <CardContent>
                        <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>
                        <Typography gutterBottom variant="h5" component="h2" align='center' color='#d2691e'>
                            Events
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {im.title}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            2018
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions> */}
                </Card>
                </Grid>
            ))
        }

    </Grid>
    </div>
    
  );
}
