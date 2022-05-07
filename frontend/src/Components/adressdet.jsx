

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./adressdet.css"
import Checkoutpersonal from './checkoutPersonaldet'

function Adressdet() {

const [firstname,setfirstname]= useState()
const [mobile,setmobile] = useState()
const [street,setstreet] = useState()
const[pin,setpin] = useState()
const [state,setstate] = useState()
const [country,setcountry] = useState()
    
 axios.get("http://localhost:5000/addressdet").then(res=>{
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
  <button className="deliverbut">
      DELIVER TO NEW ADDRESS</button>

 


    </div>
  )
}

export default Adressdet