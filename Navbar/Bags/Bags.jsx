import React from 'react'
import './Bags.css'
export const Bags = ({value}) => {

  return (
    <div className={value ? "true" : "false"}>
           <div className="bags-dropdown">
                  <ul>
                  <h4>Style for Guys</h4>
                  <a href="#"><li>Pulse</li></a>
                  <a href="#"><li>Rucksacks</li></a>
                  <a href="#"><li>Rucksacks</li></a>
                  </ul> 
                  <ul>
                  <h4>Styles for Girls</h4>
                  <a href="#"><li>Backpacks</li></a>
                  <a href="#"><li>Handbags</li></a>
                  </ul>
                  <ul><h4>Shop By Category</h4>
                  <a href="#"><li>Bags</li></a>
                  <a href="#"><li>Belts</li></a>
                  <a href="#"><li>Wallets</li></a>
                  <a href="#"><li>Perfumes</li></a>
                  <a href="#"><li>Face Mask</li></a>
                  <a href="#"><li>Pop Sockets</li></a>
                  </ul>
                <img src={require("../images/bagsbanner.jpg")} alt="" />        
      </div>
      </div>
     

  )
}
