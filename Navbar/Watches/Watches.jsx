import React from 'react'
import './Watches.css'
export const Watches = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
          <div className="watches-dropdown">
                  <ul>
                  <h4>Shop For</h4>
                  <li>
                  <img src={require("../images/forhim.webp")} alt="" /> 
                      Him</li>
                  <li>
                  <img src={require("../images/forher.webp")} alt="" /> 
                      Her</li>
                  <li>
                  <img src={require("../images/forthem.webp")} alt="" /> 
                      Them</li>
                  </ul> 
                  <ul>
                  <h4>Shop By Style</h4>
                  <li>
                  <img src={require("../images/casual.webp")} alt="" /> 
                      Casual</li>
                  <li>
                  <img src={require("../images/fashion.webp")} alt="" /> 
                      Fashion</li>
                  <li>
                  <img src={require("../images/sporty.webp")} alt="" /> 
                      Sporty</li>
                  <li>
                  <img src={require("../images/tees.webp")} alt="" /> 
                      Tees</li>
                  </ul>
                  <ul>
              <h4>Shop by collection</h4>
              <li>
              <img src={require("../images/Batman.webp")} alt="" /> 
                  Batman</li>
              <li>
              <img src={require("../images/wonderwoman.webp")} alt="" /> 
                  Wonder Woman</li>
              <li>
              <img src={require("../images/coke.webp")} alt="" /> 
                  Coca Cola Edition</li>
              <li>
              <img src={require("../images/avengers.webp")} alt="" /> 
                  Avengers</li>
          </ul>
          <img src={require("../images/Watches.jpg")} alt="" /> 
      </div>
    </div>
  )
}
