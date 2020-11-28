import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    holder: {
        padding : '150px 60px 80px'
    } ,

    about : {
        padding : 20,
        textAlign : 'center',
        fontFamily : "'Roboto Slab', serif",
    } ,
    option: {
        textAlign : 'center'
    } ,
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));


  const listDatas = [ 
      { item : 'ABOUT US' , subitems : ['Introduction' , 'Mission & Vision' , 'Department News' , 'Our Events' , 'Photo Album']} ,
      { item : 'ADMINISTRATION' , subitems : ['Message From Head' , 'Faculty Member' , 'Administration Stuffs' , 'Technical Stuffs']} ,
      { item : 'ADMISSION' , subitems : [ 'Admission Requirements' , 'Tuition Fees' , 'Scholership & Waiver' , 'Course Offerings']} ,
      { item : 'RESOURCES' , subitems : [ 'Labratoris' , 'forms' , 'Advisings' ,  'FAQ']} ,
      { item : 'RESEARCHS' , subitems : [ 'Ares' , 'Research Collaborations' , 'Publications' , ]} ,
      { item : 'STUDENT ACTIVITIES' , subitems : ['Computer Club' , 'ACM ICPC Club' , 'IEEE Club']} ,
      { item : 'ALUMNI' , subitems : ['Student Alumni']} ,
      { item : 'CONTACT US' , subitems : 'Star Tower , Kamal Ataturk Avenue , Banani Dhaka'} ,
    ]


const About = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
    <div>
        <Grid container spacing={3} className={classes.holder}>
            <Grid item xs={7} className={classes.about}>
                <h2 style={{fontSize : 40 , color : '#642941' ,}}>
                    Lets Know About Our Department
                </h2>

                <hr style={{backgroundImage : 'linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))' , width : '80%' , margin : '0 auto'}}/>
               
                <p style={{ textAlign : 'justify' , textJustify : 'inter-word' , padding : '30px'}}>
                    Primeasia University, a private university, started academic program in different disciplines in engineering, science and business in 2003 with the approval of University Grants Commission, Govt. of Bangladesh. Computer Science and Engineering (CSE) department, under the School of Engineering, started its program in 2008. The department has a strong faculty and necessary resources to conduct academic program. Students from all over Bangladesh seek admission here and all graduates are well placed in profession, teaching, training and higher studies in abroad. This department has congenial academic environment of learning, sharing knowledge, co-curricular activities, demonstration of individual skill through software and hardware projects, inter university events on programming contest and other types of activities. The CSE department has a quality assurance cell under UGC-World bank project and an Academic Development Committee.
                </p>
                
            </Grid> 

            <Grid item xs={5} className={classes.option}>

                <List className={classes.root}>

                {/* <ListItem button onClick={handleClick}>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Starred" />
                    </ListItem>
                    </List>
                </Collapse> */}

                {
                    listDatas.map( listData => (
                        <ListItem button onClick={handleClick}>
                            <ListItemText primary={listData.item} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        // listData.subitems( sub => (
                        //     <Collapse in={open} timeout="auto" unmountOnExit>
                        //     <List component="div" disablePadding>
                        //         <ListItem button className={classes.nested}>
                        //             <ListItemText primary={sub} />
                        //         </ListItem>
                        //     </List>
                        //     </Collapse>
                        // ))
                    ))
                }

                </List>

            </Grid>
        </Grid>
    </div>
    )
}

export default About
