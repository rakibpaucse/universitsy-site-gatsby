import React, { Component } from "react";
import './card.css'

import sir from '../../images/sir.jpg'

const Card = (props) => {

  const holdTempClass = "card ";
  return (
    <div className={holdTempClass + props.name}>
      <div className="content">
        <div className="front">
            <img src={sir} alt="" />
         </div>
        <div className="back">
        <p>
                                Assistant Professor & Head, <br/> CSE Department <br/>
                                Harvard Business School, Boston, USA  <br/>
                                Ph.D., SKKU, Seoul, South Korea  <br/> 
                                M.B.A., Indiana University <br/>  (Kelley School of Business), Bloomington, USA <br/>
                                M.Sc, Ajou University, Suwon, S.Korea   <br/>
                                B.E., Sahjalal University of Science and Technology<br/>
        </p>
        </div>
      </div>
    </div>
  )
}



export default Card;