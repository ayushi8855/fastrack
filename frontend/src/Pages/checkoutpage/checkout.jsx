
import "./checkout.css"
import React from 'react'
import Checkoutpersonal from "../../Components/checkoutPersonaldet"
import Footer from "../../Components/footeres/Footer.jsx"


 const url="https://lh3.googleusercontent.com/FDJs4aT3KRBcYSqbbIcVPkPZp8lzDxGqgNu3a6T_rmEVbkdVBdTbagmeCMeVf6Y2Qu9qFI30youvL-pyuu0x0rB3su5XLIa_wsQcQ_pBpw"

import {UserContext} from "../../Context/username"
import { useContext } from "react"









 function Checkout() {

    const {username} = useContext(UserContext)
  return (
<div>

<div className="navb">
 <div>

     <img src ={url}
     alt="user image"
    className="navlogo" />
 </div>
<div>
 <h4 style={{"color":"white" ,"marginTop":"10px"}}>Do You Have A Question?</h4>
 <h4  style={{"color":"white" ,"marginTop":"10px"}}>Call us on  1800-266-0123</h4>
    </div>
    </div >
<div className="body">
    <h4 style ={{"marginLeft":"50px","paddingTop":"20px"}}>Place Your Order in 4 Easy Steps</h4>
    <hr style ={{"width":"90%","marginLeft":"40px"}}/>

<h3 style ={{"marginLeft":"100px","marginTop":"20px", "display":"flex"}}> 1.   SIGNED IN AS  {username} </h3>
<hr style ={{"width":"90%","marginLeft":"40px"}}/>

<h3 style ={{"marginLeft":"100px","marginTop":"20px", "display":"flex"}}> 2.   Delivery Information </h3>
<hr style ={{"width":"90%","marginLeft":"40px"}}/>
<h4 style ={{"marginLeft":"70px","marginTop":"20px", "display":"flex"}}> In order to deliver your order, we need to gather some information from you. Please fill the form below. </h4>



<h3 style ={{"marginLeft":"70px","marginTop":"20px", "display":"flex"}}> Your Personal Details </h3>
</div>

<Checkoutpersonal/>
<Footer/>
</div>




    
  )
}


export default Checkout