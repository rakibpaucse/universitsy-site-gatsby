import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    holder: {
        display : 'flex',
        alignItems : 'center'
    }
}));



const Achivments = () => {
    
const classes = useStyles();

    return (
        <Grid container spacing={3} classname={classes.holder}>
            <Grid item xs={5} >
                Activities
            </Grid>

            <Grid item xs={5}>
                Researchs 
            </Grid>
        </Grid>
    )
}

export default Achivments
