

import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import Adressdet from './adressdet'
import {AuthContext} from "../Context/Authcontext"

function Checkoutpersonal() {

  const [data1,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    mobileno:"",
    country:"",
    pincode:"",
    state:"",
    street:"",
   
})

const [authent,setauthent] = useState(false)


const adressdet1=()=>{
 
  setauthent(!authent)
}


const changeHandler = e =>{
    setData({...data1,[e.target.id]:e.target.value})
}

const submitHandler = (e) =>{
 e.preventDefault();


axios.post("https://fastrackbackend.herokuapp.com/checkout",data1)

.then(response =>{
 
 if(response.status===200){
  
}
}).catch(err=>{
console.log(err)
})
}


  {/*axios.get("http://localhost:5000/auth").then(res=>{
  console.log(res.data.users)
 }).catch(err=>{
   console.log(err)
 })*/}
 

  return (
    <div className="inputdiv">
 <form onSubmit = {submitHandler}>
    <div className="inputheading"> First Name *</div> 
     <br/>
 <input className='inputbox' type="name" id="firstname"
                    placeholder="First Name "
                    required
                 onChange={changeHandler}>
                    </input>

                    <div className="inputheading"> Last Name *</div> 
     <br/>
 <input className='inputbox' type="name" id="lastname"
                    placeholder="Last Name "
                    required
                      onChange={changeHandler}>
                 
                    </input>
                    <div className="inputheading"> Email Address *</div> 
     <br/>
 <input className='inputbox' type="name" id="email"
                    placeholder="Email id "
                    required
                 onChange={changeHandler}>
                    </input>
                    <div className="inputheading"> Phone Number *</div> 
     <br/>
 <input className='inputbox' type="name" id="mobileno"
                    placeholder="Phone Number "
                    required
                 onChange={changeHandler}>
                    </input>


<h2>DELIVERY DETAILS</h2>



<div className="inputheading"> Counntry*</div> 
<br/>
<input className='inputbox' type="name" id="country"
                    placeholder="Country "
                    required
                 onChange={changeHandler}>
                    </input>
                    
<div className="inputheading"> Pincode*</div> 
<br/>
<input className='inputbox' type="number" id="pincode"
                    placeholder="Pincode "
                    required
                      onChange={changeHandler}>
                 
                    </input>
     
<div className="inputheading">State*</div> 
<br/>
<input className='inputbox' type="name" id="state"
                    placeholder="State "
                    required
                 onChange={changeHandler}>
                    </input>

                    
<div className="inputheading"> Street/address/locality*</div> 
<br/>
<input className='inputbox' type="name" id="street"
                    placeholder="Flat no,House no, Street name "
                    required
                 onChange={changeHandler}>
                    </input>
                    <br/>
                    <button className="butt" onClick={()=>adressdet1()}>Continue to review order</button>
 </form>
 
 {authent?<Adressdet/>:""}
 <hr/>
  
 </div>
    
    
  )
}

export default Checkoutpersonal