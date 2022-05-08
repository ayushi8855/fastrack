import React from 'react'
import './Offers.css'
export const Offers = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
    <div className="offers-dropdown">
                
    <img src={require("../images/Offers1.webp")} alt="" /> 
    <img src={require("../images/offers2.webp")} alt="" /> 
    <img src={require("../images/offers3.jpg")} alt="" /> 
    
           
 </div></div>
  )
}
