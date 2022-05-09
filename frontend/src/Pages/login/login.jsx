
import React, { Component } from 'react'
import "./login.css"
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import { BrowserRouter,useNavigate} from "react-router-dom"

import {useState,useContext} from 'react'
import axios from 'axios';
import {AuthContext} from "../../Context/Authcontext"
import { UserContext } from '../../Context/username';



function Login(){
  const url ="https://logos-download.com/wp-content/uploads/2018/11/Fastrack_Logo-700x335.png"

 const {isAuth,toggleAuth}= useContext(AuthContext)
 const {username,username11} = useContext(UserContext)
 
 const navigate = useNavigate();

  const [data2,setData] = useState({
   
    email:"",
    password:""
})

const changeHandler = e =>{
    setData({...data2,[e.target.id]:e.target.value})
}

const submitHandler = e =>{
e.preventDefault();


 
axios.post('https://fastrackbackend.herokuapp.com/login',data2)
.then(
  response => 
  {
    alert(response.data.message)
   if(response.status === 200){
    toggleAuth()
    console.log(response.data)
    username11(response.data.userdata)
      navigate("/")

      setToken(response.data.token)
    }
    
  }
).catch(err=>{
  alert(err.response.data.message)
})
  

}     



const gotohome=()=>{
  navigate("/")
}



return ( 
<div >
      <div className='fstrackimage'
><img src={url}
alt="user image"
style={{ width: "150px" }}
onClick={()=>gotohome()}
 />

</div>
<div className='logorsign'>
<div className='loginpage'>
<div className='borderbox' style={{"height":"228px",
"width":"300px","marginLeft":"50px","marginTop":"80px"}}>
<h2><span>Log in</span></h2>

<form onSubmit = {submitHandler}>

               
<input  className='inputbox' type="email" id="email"
                placeholder="Enter email Id *"
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
              
 

  <br/>
  <button>Log In</button>
</form>
</div>
</div>



















<div className='verticalline'>

</div>

<div className='signupbox'>
  <div  style={{"display":"flex",
"marginLeft":"60px"}}>
  <h2 className='newuserheading'>NEW USER? </h2><h2 className='createaccheading'>CREATE AN ACCOUNT</h2>

  </div>
 
  <h2 className='createben'>Benifis Of Creating an New Account </h2>

<ul>
<li className='lists'> You will get Benefits from our loyalty Program called Encircle Which entitles you to earn points for your Purchase which 
  you can redeem in Subsequent Purchases</li>
<li className='lists'>You will get Special Previews to 
  our Limited Collections and Sales.</li>
<li className='lists'>You will Receive offers tailor-made for you.</li>
</ul>
<div className='signupbut'>
<Link className='signlink' to ="/signup"
>
  <p>SIGN UP NOW</p></Link>

  </div>
</div>


    </div>
    
    </div>
    
    )
  
}








     {/*} <form>
<input
 value ={name} 
onChange={(e)=>setName(e.target.value)}
type="text" placeholder="Name" />
<br/>
<input 
 value ={email} 
 onChange={(e)=>setEmail(e.target.value)}
 
type="email" placeholder="Email" />
<br/>
<input
 value ={number} 
 onChange={(e)=>setNumber(e.target.value)}
 
type="number" placeholder="Phone number" />
<br/>
<input
 value ={password} 
 onChange={(e)=>setPassword(e.target.value)}
 
type = "password" placeholder="Password"/>
      </form>
*/}


export default Login
