import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import About from './about'
import Marquee from '../components/utils/marquee'
import Feature from '../components/feature'
import Message from '../components/message'
import Counter from '../components/counter'
import Achivment from '../components/achivments'
import Footer from '../components/footer'

const layout = () => {
    return ( 
        <div>
            <Header />
             
             <div style={{height:12}}></div>

            <Hero />

            <About />

            <Marquee />

            <div style={{height:120}}></div>

            <Feature />

            <div style={{height:120}}></div>

            <Message />

            <div style={{height:120}}></div>

            <Counter />
            
            <div style={{height:120}}></div>

             <Achivment />

            <div style={{height:120}}></div>

            <Footer />

        </div>
    )
}

export default layout
