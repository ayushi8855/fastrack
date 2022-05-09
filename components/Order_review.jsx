import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import { Login } from './Login'
import  axios  from 'axios'
import "./order.css"
import { Link } from 'react-router-dom'
export const Order_review = () => {
    const [detail,setdetail] = useState([])
    const [reveiw,setreveiw] = useState([])
    const [total, setTotal] = useState(0);
    const [dis, setdis] = useState(0);
    const [qty, setQty] = useState(1);
    useEffect(()=>
    {
        subTotal()
     subdis()
     getdetail() 
     getreview()
     
    },[])
  
    const getdetail = async ()=>
    {
     let res = await axios.get("https://fastrackbackend.herokuapp.com/addressdet")
     let arr = [];      
             arr.push(res.data[res.data.length-1])
             setdetail(arr)
             console.log("bhais sajb",arr)
    }
    const getreview = async ()=>
    {
     let res = await axios.get("https://fastrackq.herokuapp.com/cart")
     
     setreveiw(res.data)
     console.log("data",res)
    }

    const subTotal = ()=>{
        const sum = reveiw.reduce((accumulator, e) => {
          return accumulator + e.price*qty;
        }, 0);
        setTotal(sum);
      }
 
      const subdis = ()=>{
        const sum = reveiw.reduce((accumulator, e) => {
          return accumulator + (e.price-e.discountedprice)*qty;
        }, 0);
        setdis(sum);
      }

  return (
    <div className='review'>
        {/* <div  className='order_reveiw htwo'> <Login></Login></div> */}
       <hr/>
        <div className='order_reveiw'>
        <h2 className='htwo'>DELIVERY INFORMATION</h2>
        <Row>
            <Col>CONTRCT DETAIL</Col>
            <Col>ADDRESS DETAIL</Col>
        </Row>
       
        {detail.map((e)=>(
             <Row>
       <Row className='name'>
            <Col>{e.title} {e.firstname} {e.lastname}</Col>
            <Col>{e.street}</Col>
        </Row>
        <Row className='name'>
            <Col>{e.mobileno}</Col>
            <Col>{e.city}-{e.pincode}</Col>
        </Row>
        <Row className='name'>
            <Col>{e.email}</Col>
            <Col>{e.state} {e.country}</Col>
        </Row>
        </Row>
    ))}
   </div>
   <hr/>

  <div className='order_reveiw'>
      <h2 className='htwo'>
          ORDER REVEIW
      </h2>
      <p style={{fontWeight:"normal"}}>Please review your order to ensure your details are correct.</p>
      <p style={{fontWeight:"normal"}}>If you have reviewed your order, you can proceed to the next stage and make the payment.</p>
      <Row>
          <Col md="6">ITEM(S)</Col>
          <Col>QUANTITY</Col>
          <Col>TOTAL</Col>
          <Col>DELIVERY METHOD</Col>
      </Row>
      <hr/>
    
          {reveiw.map((e)=>
            <Row>
          <Col md="6">
          <Row>
              <Col>
              <img className="image" src={e.image} alt="" />
              </Col>
              <Col  md="8">
             <h5 className='title'>{e.title}</h5> 
              <br/>
              <h5 style={{display:"flex"}}>${e.discountedprice}  <p style={{marginRight:"5px",marginLeft:"5px",color:"gray",textDecoration:"line-through"}}>${e.price}</p><p style={{color:"red"}}> {e.discount}</p></h5>  
              </Col>
          </Row>
          </Col>
          <Col ><h5 className='hfive'>{qty}</h5></Col>
          <Col>{e.discountedprice*qty}</Col>
          <Col>standar delivery :Free</Col>
          <hr/>
          
          </Row>
          
          )}
         <h2 className='htwo'>TOTAL BREAKDOWN</h2>
       
         <Row>
         <Row><Col className='name'>Order Subtotal</Col><Col>{total}</Col></Row>
         <Row><Col className='name'>Discount</Col><Col>-{dis}</Col></Row>
         <Row><Col className='name'>Shipping</Col><Col>Free</Col></Row>
         <Row><Col className='name'>YOU PAY</Col><Col>{total-dis}</Col></Row>
         <Row><Col className='name'>INCLUSIVE OF ALL TAXES*</Col><Col></Col></Row>
         <Row><Col className='name'>You Save</Col><Col>-{dis}</Col></Row>
         </Row>
         <Link to={"/checkout/payment"}>
         <button className='pay_btn'>Continue to Payment</button>
         </Link>
           
          
  </div>
  <hr/>
<div className='order_reveiw'>

  <h2 className='htwo'>PAYMENT INFORMATION</h2>
  </div>
    </div>
  )
}
