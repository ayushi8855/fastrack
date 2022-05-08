import React from 'react'
import { Link } from 'react-router-dom'
import Checkoutpersonal from '../../Components/checkoutPersonaldet'
import Paying from '../paying/paying'
import "./paymentpage.css"

const url1 ="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815261-jd08_84586.png"
const url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png"
const url3 ="https://www.pngfind.com/pngs/m/208-2087957_difference-between-visa-mastercard-and-rupay-card-transparent.png"
const url4 ="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png"

const url5 ="https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/maestro.png"



function Paymentpage() {

   
  return (
    <div>

<Checkoutpersonal/>
        <div className='paymentpage'>
<div className='paymentleft'>
<h2>4) PAYMENT INFORMATION</h2>
<h4>In order to process your order, we need to gather your payment details.
Please select a mode of payment below. You will be securely
redirected to our partner site to process this order.</h4>

<div className='giftcardbox'>
<div className='giftcard1'>
    <h3>ENCIRCLE REDEMPTION</h3>
</div>
<div className='giftcard1'>
    <h3>GIFT CARD/E-GIFT CARD</h3>
</div>
</div>
<h4 >Successffully linked Encircle accounnt</h4>
<h3 style={{"paddingLeft":"40px"}}>Encircle ID</h3>
<h3  style={{"paddingLeft":"40px"}}>456789123098</h3>
<h3  style={{"paddingLeft":"40px"}}>BALANCE</h3>
<h3  style={{"paddingLeft":"40px"}}>0 points</h3>
<hr/>
<h4>You have ₹ 2195 left to pay.</h4>
<h4>Complete your order using another payment method</h4>
<div className='paymentbox'>
<h4>CREDIT CARD / DEBIT CARD / NET BANKING / WALLET</h4>
<h4 style={{"color":"greyText"}}>Use your Credit Cards, Debit Cards, Wallets or Netbanking</h4>
<div className='creditcards'>
<img src ={url1}/>
<img  style ={{"width":"60px","height":"70px","marginTop":"40px"}} src ={url2}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px","marginLeft":"20px"}} src ={url3}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px"}} src ={url4}/>
<img  style ={{"width":"100px","height":"100px","marginTop":"30px"}} src ={url5}/>


</div>

<div  className="paybut" >
<button  style={{"width":"200px",'marginLeft':"50px"}}><Link to ="/checkout/paying" element={<Paying/>} style={{"textDecoration":"none","color":"black"}}
  >PAY FOR YOUR ORDER</Link>

</button>
</div>
<h5 style={{"color":"GrayText" ,"paddingLeft":"30px"}}>By placing the order, you have read and agreed the  Terms and Conditions and Privacy Policy of Fastrack.in</h5>
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

<h3  style={{"paddingLeft":"30px"}}>TOTAL BREAKDOWN</h3>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4>Order subtotal</h4>
    <h4> ₹  2195</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4>Discount</h4>
    <h4> ₹  0</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4>Shipping</h4>
    <h4> FREE</h4>
</div>
<div style={{"display":"flex","marginTop":"-20px"}}>
    <h4>YOU PAY</h4>
    <h4>  ₹  2195</h4>
</div>
<h5 style={{"paddingLeft":"200px"}}>INCLUSIVE OF ALL TAXES*</h5>
</div>
<hr/>

        </div>
    </div>
  )
}


export default Paymentpage