import React from 'react'
import Particles from './utils/particle';

import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/deptLogo.jpg'


const useStyles = makeStyles((theme) => ({

  imgHolder: {
    height:150 ,
    width : 150 ,
    borderRadius : '50%',
    border : '2px solid '
  },

  slogan : {
    marginTop : 50 ,
    fontFamily : "'Roboto Slab', serif",
    color : 'white',
  },
    mainSlogan: {
      fontFamily : 'Lato',
      fontSize : 45
    },
    secSlogan:{
      fontSize : 25
    }
  

}));

const styles = {
    root: {
      // fontFamily: "sans-serif",
      textAlign: "center",
      position : 'relative',
      height: "600px",
      background: "#642941",
      // background: "#974b6a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },

    mid: {
      position:'absolute',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection : 'column'
    }
  };
  

const Hero = () => {

    const classes = useStyles();

    return (
        <div style={styles.root}>
        
        <div style={styles.mid}>
          <div className={classes.imgHolder}>
            <img src={logo} alt="" srcset="" style={{height:'100%' , width:'100%' ,  borderRadius : '50%'}}/>
          </div>

          <div className={classes.slogan}>
            <h2 className={classes.mainSlogan}> Department Of Computer Science </h2>
            <p className={classes.secSlogan}> Strive For Perfection </p>
          </div>
        </div>

        <div style={{height:'100%' , width:'100%' , overflow : 'hidden' }}>
          <Particles />
        </div>
      </div>
    )
}

export default Hero
