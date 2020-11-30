import React from 'react'
import {Grid , Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import research from '../images/research.jpg'




import CarouselHolder from '../components/utils/carousel'
 



const useStyles = makeStyles((theme) => ({
    Aholder: {

        width : '90%',
        margin : '0 auto',
        padding: '20px 0px'
    },
    imgHolder : {
        marginTop : 25,
        textAlign : 'center'
    },
    details : {
        fontSize: 15,
        textAlign : 'justify' , 
        textJustify : 'inter-word' ,
        padding : '0px 15px'
    },
    card: {
        padding : 15
    },
    research : {
        width : '95%',
        height : '46vh',
        border : '2px solid'
    }
}));





const Achivments = () => {
    
const classes = useStyles();

    return (
        <div style={{width:'100%'}} >
        <Grid container spacing={10} classname={classes.Aholder}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} >
                <Card className={classes.card}>

                    <h2 style={{textAlign:'center' , fontSize : 35 , color: 'brown' ,  fontFamily : "'Roboto Slab', serif", }} > Activites  </h2>
                    <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>

                    <CarouselHolder style={{padding : 25 , border : '1px solid'}} />
                </Card>

            </Grid>


            <Grid item xs={5}>
                <Card className={classes.card} style={{paddingBottom:0}}>

                    <h2 style={{textAlign:'center' , fontSize : 35 , color: 'brown' ,  fontFamily : "'Roboto Slab', serif", }} > Researchs  </h2>
                    <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>

                    <div className={classes.imgHolder} >  <img src={research} alt="" className={classes.research}/> </div>

                    <div className={classes.detail} >
                        <p className={classes.details} >
                            Along with pedagogy, ECE faculty members invest a significant portion of their time and effort in high quality research and publications. Many of the faculty members of the ECE department are doing research in different cutting edge research areas such as information systems
                        </p>  
                    </div>
                    
                </Card>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        </div>
    )
}

export default Achivments
