import React from 'react'
import './Earphones.css'
export const Earphones = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
     <div className="smart-audio-dropdown">
    <ul>
    <h4>Smart Watches & Bands</h4>
    <a href="#"><li>Reflex Vox</li></a>
    <a href="#"><li>Reflex 3.0</li></a>
    <a href="#"><li>Reflex Watch</li></a>
    </ul> 
    <ul>
    <h4>Wireless Audio</h4>
   <a href="#"> <li>Wireless Headphones</li></a>
   <a href="#">  <li>True Wireless earbuds</li></a>
    </ul>
    <img src={require("../images/SmartWatch.webp")} alt="" /> 
    <img src={require("../images/Earphones.webp")} alt="" /> 
</div>
</div>
  )
}
