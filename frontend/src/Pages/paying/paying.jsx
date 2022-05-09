import React from 'react'
import { useState } from 'react'
import "./paying.css"
import Footer from "../../Components/footeres/Footer"
const url ="https://logos-download.com/wp-content/uploads/2018/11/Fastrack_Logo-700x335.png"

const url2 ="https://cdn.vectorstock.com/i/1000x1000/62/63/credit-card-icon-colored-symbol-premium-quality-vector-21626263.webp"
const url3 = "https://pic.onlinewebfonts.com/svg/img_66356.png"

const url4 ="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-wallet-icon-in-trendy-style-isolated-background-png-image_1540509.jpg"


function Paying() {

    const [cardno1,setcardno] = useState(0)
const [cvv1,setcvv] = useState(0)

const changeHandle=(e)=>{
setcardno(e.target.value)
setcvv(e.taret.value)

}



   const submitHandler=(e)=>{
    e.preventDefault();
      
if(cardno1 <1000000000|| cvv1 < 301){
    alert("Payment success   you willl recieve order in 5 days")
}else{
    alert("check card details")
}


    }
  return (


    <div>
        <div className='pay'>
            <div className='topbar'>
<img  style={{"height":"80px","width":"80px","marginLeft":"-400px","marginTop":"40px"}} src ={url}/>

<h3 >Payment Done Towards Titan Company Limited</h3> 




   </div>
   <div className='paybox'>
<div className='payboxright'>
<h3>Select a payment method</h3>
 <div className='credit'>
<img src ={url2}/>
<div>
    <h4 style={{"marginTop":"1px","paddingTop":"10px"}}>CREDIT CARD/ DEBIT CARD</h4>
    <h5 style={{"marginTop":"5px","paddingLeft":"30px"}}>Visa,Master card,Rupay ,Maestro</h5>
</div>

 </div>


 <div className='credit'>
<img src ={url3}/>
<div>
    <h4 style={{"marginTop":"-1px","paddingTop":"10px"}}>NET BANKING</h4>
    <h5 style={{"marginTop":"5px","paddingLeft":"30px"}}>Pay with internet Banking Account</h5>
</div>

 </div>

 <div className='credit'>
<img src ={url4}/>
<div>
    <h4 style={{"marginTop":"-1px","paddingTop":"10px"}}>WALLET</h4>
    <h5 style={{"marginTop":"5px","paddingLeft":"30px"}}>Pay using wallet</h5>
</div>

 </div>

</div>
<div className='payleft'>

<h4 style={{"marginTop":"20px","paddingLeft":"30px"}}>Amount payable</h4>
<h4 style={{"marginTop":"20px","paddingLeft":"30px"}}> ₹ 2,195</h4>

<h4 style={{"marginTop":"20px","paddingLeft":"30px"}}>Pay with Credit/Debit card</h4>

<form onSubmit={submitHandler}>
    <h5 style={{"paddingTop":"40px","marginLeft":"20px"}}>Card Number</h5>
<input style={{"marginTop":"10px"}} className='inputbox' type="number" id="cardno"
                    placeholder="Enter Card no *"
                    required 
                    onChange={changeHandle}
                    >
                   
                    </input>

                    <div style={{"display":"flex","marginTop":"-30px"}} >
                        <div>
                        <h5 style={{"paddingTop":"40px","marginLeft":"20px"}}>Expiry date</h5>
    
                    <input style={{"marginTop":"10px"}} className='inputbox' type="number" id="date"
                    placeholder="MM/YY"
                    required
                    onChange={changeHandle}
                    >
                    </input>
                    </div>
<div>
                    <h5 style={{"paddingTop":"40px","marginLeft":"20px"}}>CVV</h5>
                    <input style={{"marginTop":"10px"}} className='inputbox' type="number" id="cvv"
                    placeholder="* * *"
                    required
                    onChange={changeHandle}
                   >
                    </input>
                    </div>
                    </div>
<div style={{"marginTop":"-30px"}}>                    <h5 style={{"paddingTop":"40px","marginLeft":"20px"}}>Card Holders Name</h5>

                    <input style={{"marginTop":"10px"}} className='inputbox' type="string" id="name"
                    placeholder="card hoders name *"
                    required
                    >
                    </input>
                    </div>

                    <button style={{"width":"50%","marginLeft":"100px","fontSize":"14px","backgroundColor":"#e67a20"}}>Pay Now</button>

                    </form>

</div>

   </div>
   
    </div>
     
<Footer/>
    </div>
  )
}

export default Paying