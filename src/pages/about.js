import React from "react"
import { makeStyles } from "@material-ui/core/styles"
<<<<<<< HEAD
=======
import Divider from "@material-ui/core/Divider"
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
import Grid from "@material-ui/core/Grid"
import Collapse from '@material-ui/core/Collapse';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  holder: {
<<<<<<< HEAD
    padding: "150px 10px 50px",
=======
    padding: "150px 70px 0px",
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
    width: '90%',
    margin: '0 auto'
  },

  about: {
    padding: 20,
    textAlign: "center",
    fontFamily: "'Roboto Slab', serif",
  },
  option: {
    textAlign: "center",
<<<<<<< HEAD
    // transform: 'translateY(-85px)'
=======
    transform: 'translateY(-85px)'
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
<<<<<<< HEAD

=======
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
<<<<<<< HEAD
  eachSublink : {
      textAlign : 'center',
      color: 'white',
      background : '#5f9ea0',
      padding : 5,
      cursor : 'pointer'
  }
=======
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
}))

const listDatas = [
  {
    item: "ABOUT US",
    subitems: [
      "Introduction",
      "Mission & Vision",
      "Department News",
      "Our Events",
      "Photo Album",
    ],
  },
  {
    item: "ADMINISTRATION",
    subitems: [
      "Message From Head",
      "Faculty Member",
      "Administration Stuffs",
      "Technical Stuffs",
    ],
  },
  {
    item: "ADMISSION",
    subitems: [
      "Admission Requirements",
      "Tuition Fees",
      "Scholership & Waiver",
      "Course Offerings",
    ],
  },
  { item: "RESOURCES", subitems: ["Labratoris", "forms", "Advisings", "FAQ"] },
  {
    item: "RESEARCHS",
    subitems: ["Ares", "Research Collaborations", "Publications"],
  },
  {
    item: "STUDENT ACTIVITIES",
    subitems: ["Computer Club", "ACM ICPC Club", "IEEE Club"],
  },
  { item: "ALUMNI", subitems: ["Student Alumni"] },
  {
    item: "CONTACT US",
    subitems: ["Star Tower , Kamal Ataturk Avenue , Banani Dhaka"],
  },
]

const About = () => {
  const classes = useStyles()

  const menu = {}
  listDatas.forEach(data => {
    menu[data.item] = false
  })

  const [open, setOpen] = React.useState(menu)
  const handleClick = e => {
    Object.keys(open).forEach(key => {
        if(e.target.innerText !== key)
            open[key] = false
    })
    setOpen({ ...open, [e.target.innerText]: !open[e.target.innerText] })
  }

  return (
    <div>
<<<<<<< HEAD
      <Grid container spacing={5} className={classes.holder}>
=======
      <Grid container spacing={10} className={classes.holder}>
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
        <Grid item xs={8} className={classes.about}>
          <h2 style={{ fontSize: 40, color: "#642941" }}>
            Lets Know About Our Department
          </h2>

          <hr
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))",
              width: "80%",
              margin: "0 auto",
            }}
          />

          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              padding: "30px",
            }}
          >
            Primeasia University, a private university, started academic program
            in different disciplines in engineering, science and business in
            2003 with the approval of University Grants Commission, Govt. of
            Bangladesh. Computer Science and Engineering (CSE) department, under
            the School of Engineering, started its program in 2008. The
            department has a strong faculty and necessary resources to conduct
            academic program. Students from all over Bangladesh seek admission
            here and all graduates are well placed in profession, teaching,
            training and higher studies in abroad. This department has congenial
            academic environment of learning, sharing knowledge, co-curricular
            activities, demonstration of individual skill through software and
            hardware projects, inter university events on programming contest
            and other types of activities. The CSE department has a quality
            assurance cell under UGC-World bank project and an Academic
            Development Committee.
          </p>
        </Grid>

        <Grid item xs={4} className={classes.option}>
          <List className={classes.root}>
<<<<<<< HEAD

            {listDatas.map(listData => (
              <>
                <ListItem button onClick={handleClick}>
                  <ListItemText primary={listData.item} />
                  {listData.subitems && open[listData.item] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
=======
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

            {listDatas.map(listData => (
              <>
                <ListItem button onClick={handleClick}>
                  <ListItemText primary={listData.item} />
                  {listData.subitems && open[listData.item] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
                <Collapse in={open[listData.item]} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    className={classes.sublink}
<<<<<<< HEAD
                    style={{ marginLeft: "1rem" , }}
=======
                    style={{ marginLeft: "1rem" }}
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
                  >
                    {listData.subitems &&
                      listData.subitems.map(menu => (
                        // <AniLink fade duration={5} to={menu.path}>
<<<<<<< HEAD
                          <ListItem key={menu} style={{padding:'0px 16px'}}>
                            <ListItemText
                              primary={menu}
                               className={classes.eachSublink}
=======
                          <ListItem key={menu}>
                            <ListItemText
                              primary={menu}
                            //   className={classes.sublink}
>>>>>>> 26503aac3ff367c5c4343f6df3da1cda9f7927b6
                            />
                          </ListItem>
                        // </AniLink>
                      ))}
                  </List>
                </Collapse>
                {/* <Divider/> */}
                <hr
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(94, 31, 56, 0), #6f2a46, rgba(94, 31, 56, 0))",
              width: "80%",
              margin: "0 auto",
            }}
          />
              </>
              // listData.subitems( sub => (
              //     <Collapse in={open} timeout="auto" unmountOnExit>
              //     <List component="div" disablePadding>
              //         <ListItem button className={classes.nested}>
              //             <ListItemText primary={sub} />
              //         </ListItem>
              //     </List>
              //     </Collapse>
              // ))
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default About