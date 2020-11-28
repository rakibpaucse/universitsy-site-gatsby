import React from "react"
import { ThemeProvider } from '@material-ui/core'
import theme from '../themeProvider/themeProvider'
import Layout from './layout'


const IndexPage = () => (

    <ThemeProvider theme={theme} >
      <Layout/>
    </ThemeProvider >
  )


export default IndexPage
