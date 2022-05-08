import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Bags } from './Bags/Bags'
import { Earphones } from './Earphones/Earphones'
import { Offers } from './Offers/Offers'
import { Perfumes } from './Perfumes/Perfumes'
import { Watches } from './Watches/Watches'
export const Navbar = () => {
    const [watches,setWatches] = useState(false)
    const [perfumes,setPerfumes] = useState(false)
    const [bags,setBags] = useState(false)
    const [earphones,setEarphones] = useState(false)
    const [offers,setOffers] = useState(false)
    
  return ( 
    <>
      <nav>
          <div className='upperSection'>
              <div className='leftUpper'>
                  <h6>BRANDS</h6>
                  <h6>CURRENCY SELECTOR</h6>
              </div>
              <div className="rightUpper">
                  <h6><a href="#">LOGIN</a></h6>
                  <h6><a href="#">WISHLIST</a></h6>
                  <h6><a href="#">BOOK MY APPOINTMENT</a></h6>
                  <h6><a href="#">CART(0)</a></h6>
              </div>
          </div>
          <hr />
          <div className='lowerSection'>
              <div className="lowerLeft">
                  <img src={require("./images/location.png")} alt="" />
                  
                  <a href="#" onMouseEnter={()=>{setWatches(true)
                    setBags(false)
                    setPerfumes(false)
                    setEarphones(false)
                    setOffers(false)}}><h5 className='watches'>WATCHES</h5></a>

                  <a href="#" onMouseEnter={()=>{setWatches(false)
                    setBags(false)
                    setPerfumes(false)
                    setEarphones(true)
                    setOffers(false)}}><h5 >SMART & AUDIO</h5></a>
                  <a href="#"
                    onMouseEnter={()=>{setWatches(false)
                    setBags(false)
                    setPerfumes(false)
                    setEarphones(false)
                    setOffers(false)}}
                  ><h5>EYE WEAR</h5></a>
              </div>
              <div className="lowerMiddle"><img src={require("./images/mainlogo.png")} alt="" /></div>
              <div className="lowerRight">
                  <a href="#" onMouseEnter={()=>{setWatches(false)
                    setBags(true)
                    setPerfumes(false)
                    setEarphones(false)
                    setOffers(false)}}><h5 >BAGS & MORE</h5></a>
                  <a href="#" onMouseEnter={()=>{setWatches(false)
                    setBags(false)
                    setPerfumes(true)
                    setEarphones(false)
                    setOffers(false)}}><h5>PERFUME</h5></a>
                  <a href="#" onMouseEnter={()=>{setWatches(false)
                    setBags(false)
                    setPerfumes(false)
                    setEarphones(false)
                    setOffers(true)}} ><h5>OFFERS AND MORE</h5></a>
                  <a href="#"><img src={require('./images/search.png')} alt="" /></a>
              </div>
          </div>
      </nav>
   <div onMouseLeave={()=>{setBags(false)}} > <Bags value={bags} /></div>
    <div onMouseLeave={()=>{setPerfumes(false)}}><Perfumes value={perfumes}/></div>
   <div onMouseLeave={()=>{setEarphones(false)}}><Earphones value = {earphones}/></div> 
    <div onMouseLeave={()=>{setOffers(false)}}><Offers value = {offers}/></div>
    <div onMouseLeave={()=>{setWatches(false)}}><Watches value = {watches} /></div>

     
    
    


      </>
  
  )
}
