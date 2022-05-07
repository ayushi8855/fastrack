import React, {useContext,useState}from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import {AuthContext} from "./Context/Authcontext"
import {UserContext} from "./Context/username"


function Home() {
  
   let {username} = useContext(UserContext)
   const { isAuth } = useContext(AuthContext)
  
  
   //const isAuth = true

    

  const [isauth,setisauth] =useState(isAuth)


  return (
    <div>
    <div>Home</div>
{isauth?(<button onClick={()=>setisauth(!isauth)} >logout</button>):<Link to ="/login">login</Link>}
{isauth?(`${username}`):""}


</div>
  )
}



export default Home