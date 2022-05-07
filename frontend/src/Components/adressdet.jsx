

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import{Link} from "react-router-dom"
import "./adressdet.css"
import Checkoutpersonal from './checkoutPersonaldet'
import Orderreview from './Orderreview'
function Adressdet() {

const [firstname,setfirstname]= useState()
const [mobile,setmobile] = useState()
const [street,setstreet] = useState()
const[pin,setpin] = useState()
const [state,setstate] = useState()
const [country,setcountry] = useState()
    
 axios.get("https://fastrackbackend.herokuapp.com/addressdet").then(res=>{
   console.log(res.data)
   var l=res.data.length
   setfirstname(res.data[l-1].firstname)
   setmobile(res.data[l-1].mobileno)
   setstreet(res.data[l-1].street)
   setpin(res.data[l-1].pincode)
   setstate(res.data[l-1].state)
   setcountry(res.data[l-1].country)
   }).catch(err=>{
     console.log(err)
   })

   const editadr=()=>{
       
<Link to ="/checkout/form" element={<Checkoutpersonal/>}></Link>
       
   }
  
  return (
    <div>
        <h2>Your Address</h2>
 <h4> This is for delivery purpose plese give correct detilals*</h4>

  <div className='addressbox'>
  <h3 style={{"fontWeight":"bold"}}>Contact details</h3>

  <h4 style={{"fontWeight":"normal"}}>Hello  {firstname}</h4>
<h4 style={{"fontWeight":"normal"}}> +{mobile}</h4>
<h3 style={{"fontWeight":"bold"}}>Address details</h3>

<h4 style={{"fontWeight":"normal"}}>{street},</h4>
<h4 style={{"fontWeight":"normal"}}>{pin},</h4>
<h4 style={{"fontWeight":"normal"}}>{state},</h4>
<h4 style={{"fontWeight":"normal"}}>{country}</h4>
  </div>

  <div style={{"display":"flex"}}>
  <button className="deliverbut" onClick={()=>editadr()}>
  <Link to ="/checkout/form" element={<Checkoutpersonal/>} style={{"textDecoration":"none","color":"black"}}
  >DELIVER TO NEW ADDRESS</Link>

      </button>

      <button className="deliverbut" onClick={()=>editadr()}>
  <Link to ="/checkout/orderrev" element={<Orderreview/>} style={{"textDecoration":"none","color":"black"}}
  >ORDER REVIEW</Link>

      </button>
      </div>

    </div>
  )
}

export default Adressdet