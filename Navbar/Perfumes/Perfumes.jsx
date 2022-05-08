import React from 'react'
import './Perfumes.css'
export const Perfumes = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
          <div className="perfumes-dropdown">
                  <ul>
                  <h4>Shop for Guys</h4>
                  <a href="#"><li>Beat</li></a>
                  <a href="#"><li>Beat</li></a>
                  <a href="#"><li>Pulse</li></a>
                  </ul> 
                  <ul><h4>Shop for Girls</h4>
                  <a href="#"><li>Beat</li></a>
                  <a href="#"><li>Trance</li></a>
                  <a href=""><li>Pulse</li></a>
             
                  </ul>
            <div className='image'>
            <img src={require("../images/perfumes.webp")} alt="" /> 
                <h1>SIGNATURE UNISEX PERFUME</h1></div>      
      </div>
    </div>
  )
}
