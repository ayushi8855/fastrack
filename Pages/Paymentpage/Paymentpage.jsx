import React from 'react'
import { Link } from 'react-router-dom'
// import Checkoutpersonal from '../../Components/checkoutPersonaldet'
import Checkoutpersonal from '../../components/checkoutPersonaldet'

import Paying from '../paying/paying'
import "./paymentpage.css"
import "../../Pages/checkoutpage/checkout.css"

const url1 ="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815261-jd08_84586.png"
const url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png"
const url3 ="https://www.pngfind.com/pngs/m/208-2087957_difference-between-visa-mastercard-and-rupay-card-transparent.png"
const url4 ="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png"

const url5 ="https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/maestro.png"

const url="https://lh3.googleusercontent.com/FDJs4aT3KRBcYSqbbIcVPkPZp8lzDxGqgNu3a6T_rmEVbkdVBdTbagmeCMeVf6Y2Qu9qFI30youvL-pyuu0x0rB3su5XLIa_wsQcQ_pBpw"

function Paymentpage() {

   
  return (
    <div>
        <div className="navb">
 <div>

     <img src ={url}
     alt="user image"
    className="navlogo" />
 </div>
<div>
 <h4 style={{"color":"white" ,"margin-right":"100px"}}>Do You Have A Question?</h4>
 <h4  style={{"color":"white" ,"margin-right":"100px","marginTop":"10px"}}>Call us on  1800-266-0123</h4>
    </div>
    </div >


{/* <Checkoutpersonal/> */}
        <div className='paymentpage'>
<div className='paymentleft'>
<h3 style ={{"paddingTop":"40px"}}>4) PAYMENT INFORMATION</h3>
<h4 style ={{"paddingTop":"20px"}}>In order to process your order, we need to gather your payment details.
Please select a mode of payment below. You will be securely
redirected to our partner site to process this order.</h4>

<div className='giftcardbox'>
<div className='giftcard1'>
    <h4>ENCIRCLE REDEMPTION</h4>
</div>
<div className='giftcard1'>
    <h4>GIFT CARD/E-GIFT CARD</h4>
</div>
</div>
<div style={{"paddingTop":"50px"}}>
    <h4  style={{"paddingTop":"50px"}}>Successffully linked Encircle accounnt</h4>
<h3 style={{"paddingLeft":"40px","paddingTop":"20px"}}>Encircle ID</h3>
<h3  style={{"paddingLeft":"40px","paddingTop":"10px"}}>456789123098</h3>
<h3  style={{"paddingLeft":"40px","paddingTop":"10px"}}>BALANCE</h3>
<h3  style={{"paddingLeft":"40px","paddingTop":"10px"}}>0 points</h3>
</div>

<hr style={{"marginTop":"20px"}} />
<h4  style={{"marginTop":"20px"}}>You have ₹ 2195 left to pay.</h4>
<h4  style={{"marginTop":"20px"}}>Complete your order using another payment method</h4>


<div  style={{"marginTop":"20px"}} className='paymentbox'>
<h4 style={{"marginTop":"20px"}}>CREDIT CARD / DEBIT CARD / NET BANKING / WALLET</h4>
<h4 style={{"color":"greyText","marginTop":"20px"}}>Use your Credit Cards, Debit Cards, Wallets or Netbanking</h4>
<div className='creditcards'>
<img   style ={{"width":"100px","height":"100px","marginTop":"40px"}}  src ={url1}/>
<img   style ={{"width":"60px","height":"70px","marginTop":"40px"}} src ={url2}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px","marginLeft":"20px"}} src ={url3}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px"}} src ={url4}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px"}} src ={url5}/>


</div>

<div  className="paybut" >
<button  style={{"width":"200px",'marginLeft':"30px"}}><Link to ="/checkout/paying" element={<Paying/>} style={{"textDecoration":"none","color":"black","fontSize":"13px"}}
  >PAY FOR YOUR ORDER</Link>

</button>
</div>
<h5 style={{"color":"GrayText" ,"paddingLeft":"30px","marginTop":"20px"}}>By placing the order, you have read and agreed the  Terms and Conditions and Privacy Policy of Fastrack.in</h5>
</div>
<div className='upi'>
    <h5 style={{"color":"grey"}}>pay using</h5>
<h4 >UPI/DYNAMIC QR CODE </h4>
</div>
<div className='upi'>
    <h5 style={{"color":"grey"}}>pay using</h5>
<h4 >PAY ON DELIVERY </h4>
</div>
<div className='upi'>
    <h5 style={{"color":"grey"}}>pay using</h5>
<h4 >PAYTM WALLET/PAYTM POSTPAID </h4>
</div>
</div>

<div className='paymentright'>

<h3  style={{"paddingLeft":"30px","paddingTop":"40px"}}>TOTAL BREAKDOWN</h3>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}>Order subtotal</h4>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}> ₹  2195</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}>Discount</h4>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}> ₹  0</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}>Shipping</h4>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}> FREE</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}>YOU PAY</h4>
    <h4 style={{"paddingLeft":"30px","paddingTop":"40px"}}>  ₹  2195</h4>
</div>
<h9 style={{"paddingLeft":"300px"}}>INCLUSIVE OF ALL TAXES*</h9>
</div>
<hr/>

        </div>
        
    </div>

  )
}


export default Paymentpage
