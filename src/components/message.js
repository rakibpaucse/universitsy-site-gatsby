import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid , Paper} from '@material-ui/core';

import sir from '../images/sir.jpg'


const useStyles = makeStyles((theme) => ({

    holder: {
        width : '100%',
        padding: '20px 10px'
    },
    message: {
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'space-between',


        padding: '20px 10px'
    },
    nameHolder: {
        width : '42%',
        padding:10,
        textAlign : 'center',
        background: '#f5f5dc',

    },
    name:{
        '& h2': {color : '#25384b' , textAlign : 'center' , fontSize : 32},
        '& p': {
            fontSize : 15,
            textAlign : 'justify' , 
            textJustify : 'inter-word' ,
            padding : '30px'
        },
    },
    contentHolder : {
        width : '60%',
    },
        content: {
            textAlign : 'justify' , 
            textJustify : 'inter-word' ,
            padding : '30px'
        },
    event : {
        
    }
    


}))

const Message = () => {
    const classes = useStyles();
    return (
        <div style={{width : '100%'}}>
            <Grid container spacing={3} className={classes.holder}>

                <Grid item xs={6} className={classes.event}> News  </Grid>


                <Grid item xs={6} className={classes.message}>
                    <Paper className={classes.nameHolder}>
                        <img src={sir} alt="" />
                        <div className={classes.name}>
                            <h2>MUSTAFA HASAN</h2>
                            <p>
                                Assistant Professor & Head, CSE Department <br/>
                                Harvard Business School, Boston, USA  <br/>
                                Ph.D., SKKU, Seoul, South Korea  <br/> 
                                M.B.A., Indiana University (Kelley School of Business), Bloomington, USA <br/>
                                M.Sc, Ajou University, Suwon, S.Korea   <br/>
                                B.E., Sahjalal University of Science and Technology<br/>
                            </p>
                        </div>
                    </Paper>

                    <div className={classes.contentHolder}>

                    <h2 style = {{ textAlign : 'center' , fontSize : 35 , color : '#25384b'}}> Message From Head </h2>

                    <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>


                    <p className={classes.content}>
                        Welcome to Computer Science and Engineering (CSE) department of Primeasia University. 
                        The department has a strong base for undergraduate education in computer science and engineering considering that scope of computer science and engineering is 
                        very wide and expanding. The fields of studies are basic science, mathematics, computer science and engineering and general education courses.
                         The courses have been designed recognizing that computers find application in every branch of knowledge. During the course of study students
                          will learn fundamental principles of computer science and engineering, acquire skill and apply their knowledge. The department is very supportive
                           {/* to the needs of the students. The department also focuses to expose students to the fundamental of advanced knowledge in the fields of artificial
                            intelligence, machine learning, big data, robotics and complex web applications tools and techniques. We promote any sort of learning and knowledge
                             sharing events helpful to studies and career. With this background our students are deservedly very competitive in industry, teaching and higher studies. */}
                            <br/>
                        Overall we understand the need of each and every student and we are here to help students towards accomplishment of their educational objectives. 
                    </p>

                    <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>

                    </div>
                 </Grid>

            </Grid>
        </div>
    )
}

export default Message
