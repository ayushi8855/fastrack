import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const url ="https://logos-download.com/wp-content/uploads/2018/11/Fastrack_Logo-700x335.png"

import "./signup.css"


 function Signup() {

    const navigate = useNavigate();
    const [data1,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        mobileno:"",
        password:""
    })
    
    const changeHandler = e =>{
        setData({...data1,[e.target.id]:e.target.value})
    }

    const submitHandler = (e) =>{
     e.preventDefault();
  

 axios.post("http://localhost:5000/auth",data1)
 
 .then(response =>{
     alert(response.data)
     if(response.status===200){
        navigate('/login')
    }
 }).catch(err=>{
     alert(err.response.data)
    
 })

    }


return (
    <div>
          <div className='fstrackimage'
    ><img src={url}
    alt="user image"
    style={{ width: "150px" }}/>

    </div>

    <div className='borderbox'>
    <h2><span>Sign up</span></h2>

  <form method='POST' onSubmit = {submitHandler}>
  <input className='inputbox' type="name" id="firstname"
                    placeholder="First Name *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputbox' type="name" id="lastname"
                    placeholder="Last Name *"
                    required
                    onChange={changeHandler}>

                    </input>
                    <br/>
  <input  className='inputbox' type="email" id="email"
                    placeholder="Enter email Id *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputbox' type="number" id="mobileno"
                    placeholder="Mobile Number *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputbox' type="password" id="password"
                    placeholder="Enter Password *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <div>
      <input  className ="checkbox1" type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Receive our newsletters and special offers. </label>
    </div>
    <div>
        <br/>
      <input className='checkbox1' type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Get updates on  WhatsApp </label>
    </div>
    <br/>
                    <div>
      <input className='checkbox1' type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">I agree to the Terms & Conditions * and Privacy Policy.* </label>
    </div>

      <br/>
      <button>REGISTER</button>
  </form>
    </div>

    </div>
  )
}

export default Signup