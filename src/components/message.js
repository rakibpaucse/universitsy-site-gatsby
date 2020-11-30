import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid , Paper, Card  } from '@material-ui/core';

import sir from '../images/sir.jpg'

import CardView from '../components/utils/card'
import NewsCard from '../components/utils/newsCard'

const useStyles = makeStyles((theme) => ({

    holder: {
        width : '90%',
        margin : '0 auto',
        padding: '20px 0px'
    },
    message: {
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'space-between',
         padding: '20px 10px'
     },


}))

const Message = () => {
    const classes = useStyles();

    const [hov , setHov] = useState(true)

    return (
        <div style={{width : '100%'}}>
            <Grid container spacing={5} className={classes.holder}>

                <Grid item xs={6}  className={classes.event}> 
                <Card style={{padding:'10px 0'}}> 
                <h2 style = {{ textAlign : 'center' , fontSize : 35 , color : 'brown'}}>  News & Events  </h2>

                <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>

                    <NewsCard />  
                </Card> 
                </Grid>

                

                  <Grid item xs={6}  className={classes.message}> 

                    <Card style={{width:'100%' , height:'100%' , padding : 10 ,  textAlign : 'center'}}>

                    <h2 style = {{ textAlign : 'center' , fontSize : 35 , color : 'brown'}}> Message From Head </h2>

                    <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>


                        <div 
                          onMouseEnter={ e => setHov(false)}
                          onMouseLeave={ e => setHov(true)}
                          style={{display:'inline-block'  , padding:'5px 10px' , margin:'10px 0px' , borderRadius:5 , borderBottom : '2px solid #843253' , boxShadow : '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)' }}
                        >
                            <CardView name = { hov ? "hover-off" : "hover-on"} /> 
                            <h2 style={{color : '#d2691e' , textAlign : 'center' , fontSize : 25}}>MUSTAFA HASAN</h2>    
                        </div>
                        <div>

                            <p style={{padding:'0px 20px' , fontSize : 15 , fontFamily : 'Roboto Slab', textAlign:'justify'}}>
                                Welcome to Computer Science and Engineering (CSE) department of Primeasia University. 
                                The department has a strong base for undergraduate education in computer science and engineering considering that scope of computer science and engineering is 
                                very wide and expanding. The fields of studies are basic science, mathematics, computer science and engineering and general education courses.
                                The courses have been designed recognizing that computers find application in every branch of knowledge. We promote any sort of learning and knowledge
                                sharing events helpful to studies and career. With this background our students are deservedly very competitive in industry, teaching and higher studies. 
                             <br/>
                                 Overall we understand the need of each and every student and we are here to help students towards accomplishment of their educational objectives. 
                            </p>           
                        </div>
                    </Card>
                  
                    </Grid>


            </Grid>
        </div>
    )
}

export default Message
