import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import a from '../../images/3.jpg'
import b from '../../images/4.jpg'
import c from '../../images/9.jpg'
import d from '../../images/8.jpg'
import e from '../../images/1.jpg'
import f from '../../images/6.jpg'
import g from '../../images/10.jpg'

const images = [ a,b,c,d,e,f,g ]

const CarouselHolder = () => {
    return (
        <div style={{marginTop : 25}}>
            <Carousel style={{padding : 15 , width:800 , height: 600}} autoPlay showArrows={true}>
                {
                    images.map(im => ( 
                    <div> 
                        <img src={im} style={{}} alt=''/>
                    </div> 
                    ))
                }

            </Carousel>
        </div>
    )
}

export default CarouselHolder
