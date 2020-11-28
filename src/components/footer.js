import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from '../images/logo.png'


import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import PrintIcon from '@material-ui/icons/Print';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles((theme) => ({
    
    featureCards : {
        backgroundColor: "#843253",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')",

        display : 'flex',
        alignItems : 'center'

    },

    card : {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',

        '& h2' : {
            color : 'white',
            marginBottom : 8,
            fontFamily : 'Roboto Slab'
        }
    },

        address: {
            bordar : '1px solid',
            padding : '25px 0px 15px',

            '& p' : {
                marginBottom : 0,
                fontSize : 12,
                color : 'white'
            }
        }
    
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{width:'95%' , margin : '0 auto'}}>
            <Grid container spacing={3} className={classes.featureCards}>
                <Grid item xs={4} className={classes.card}> </Grid>

                <Grid item xs={4} className={classes.card}> 
                    <img src={logo} alt="" srcset="" style={{width : 145 , height : 195 }}/>
                    <h2> Computer Science & Engineering </h2>
                        <p style={{color:'white' , fontSize : 15}}> Get In Touch </p>
                    

                    <hr style={{background : '#fbfbfb' , width : '80%' , margin : '0 auto' }}/>


                    <div className={classes.address}>
                        <p> <span> <LocationOnIcon style={{fontSize : 20}} /> </span> &emsp;&emsp;  Kemal Ataturk Avenue, Banani, Dhaka, Bangladesh </p>
                        <p> <span> <CallIcon style={{fontSize : 20}} /> </span> &emsp;&emsp;  01621462175,01857333440,01777676548 </p>
                        <p> <span> <PrintIcon style={{fontSize : 20}} /> </span>  &emsp;&emsp;  9822133,9821498-501 (Ext:311,122) </p>
                        <p> <span> <DraftsIcon style={{fontSize : 20}} /> </span> &emsp;&emsp;  cse@primeasia.edu.bd </p>
                    </div>
                </Grid>

                <Grid item xs={4} className={classes.card}> </Grid>
            </Grid>
        </div>
    )
}

export default Footer
