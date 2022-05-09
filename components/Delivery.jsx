import React, { useState } from 'react'
import "./delivery.css"
import { Form } from 'react-bootstrap'
import {nanoid} from "nanoid"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Delivery = () => {
  const [form, setForm]=useState({
      
    "id": nanoid(4),
    "gender": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "mobile": "",
    "country": "",
    "pin_code": "",
    "state": "",
    "city": "",
    "nick_name": "",
    "alternate_num":""
  
})

const navigate =useNavigate()

const handlechange =(e)=>{

 
  const {name,value}=e.target

  setForm({
      ...form,
      [name]:value
  })
}
const handleclick =(e)=>
{
        e.preventDefault();
        console.log(form)
        fetch("http://localhost:8080/delivery",{
              method: "POST",
              headers: {
                  "content-type" : "application/json"
              },
              body: JSON.stringify(form)
          })
       navigate("/order",{
         replace:true
       })

}

  return (
    <div className='delivery'>
        <h2>DELIVERY INFORMATION</h2>
        <p style={{fontWeight:"normal", color:"black"}}>In order to deliver your order, we need to gather some information from you. Please fill the form below.</p>
        <h2>YOUR PERSONAL DETAILS</h2>
        <p>TITLE *</p>
        <select name="gender" className='sel' onChange={handlechange}>
          <option >Mr</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
        </select>
    <p>FIRST NAME</p>
     <input onChange={handlechange} name="first_name" type="text"/>
     <p>LAST NAME</p>
     <input name="last_name"type="text" onChange={handlechange}/>
     <p>Email</p>
     <input onChange={handlechange} name="email" type="email"/>
    
        <p>PHONE NUMBER *</p>
        <div style={{display:"flex"}}>
         +<input onChange={handlechange} style={{width:"60px",marginRight:"10px"}} value={"91"}/><input name="mobile"onChange={handlechange} style={{width:"50%",marginRight:"10px"}} />
        </div>
        <h2>DELIVERY DETAILS</h2>
        <p>COUNTRY *</p>
        <select name="country"className='country' onChange={handlechange}>
            <option value="India">INDIA</option>
            <option value="America">AMERICA</option>
        </select>
     <p>PIN-CODE/ZIP-CODE *</p>
     <input name="pin_code" onChange={handlechange} style={{width:"40%"}}/>
     <p>STATE *</p>
     <input name="state"/>
     <p>CITY *</p>
     <input name="city"onChange={handlechange}/>
     <p>STREET ADDRESS / BUILDING / LOCALITY *</p>
     <input name="street" onChange={handlechange}/> 
     <p>NICK NAME</p>
     <input name="nick_name" onChange={handlechange}/>
     <p>ALTERNATE MOBILE NUMBER(OPTIONAL)</p>
     <input name="alternate_num" onChange={handlechange}/>
     <div style={{display:"flex"}}>
       <button onClick={handleclick}  className='order1'>CONTINUE TO REVIEW THE ORDER</button>
         <button className='order1'>CANCEL</button>
     </div>
    </div>
  )
}
