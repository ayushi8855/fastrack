import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup, Col, Container, DropdownButton, Row} from "react-bootstrap"
import "./cart.css"
import axios from "axios";
import { Link } from 'react-router-dom';
export const Cart = () => {

    const [detail,setdetail] = useState([])
    const [qty, setQty] = useState(1);
    const [total, setTotal] = useState(0);
    const [dis, setdis] = useState(0);
    

    console.log(detail)

  useEffect(()=>
  {
   getdetail() 
   subTotal()
   subdis()
  },[qty])


  //get data
const getdetail = async ()=>
  {
   let res = await axios.get(`http://localhost:8080/item`)
   
   setdetail(res.data)
   console.log("data",res)
  }
  //delete
  const remove =(c)=>{
    const update = detail.filter((e, i) => {
      return e.id !== c 
  })
  console.log(update)

  setdetail(update)
  }


  //subtotal
  const subTotal = ()=>{
    const sum = detail.reduce((accumulator, e) => {
      return accumulator + e.total_price*e.qty;
    }, 0);
    setTotal(sum);
  }

//discount
  const subdis = ()=>{
    const sum = detail.reduce((accumulator, e) => {
      return accumulator + (e.total_price-e.your_price)*e.qty;
    }, 0);
    setdis(sum);
  }


  //increase and decrease
  const updatecartqty = async(value, id)=>{
    const data = await axios.patch(`http://localhost:8080/item/${id}`,{qty:value})
    setQty(data.data.qty)

  }
  const handleQty = (value, id) => {
    updatecartqty(value, id);
  };

  return (
    <div>
           
         
    <Container>
   
  <Row className="tow">
        <Col xs={12} md={8}>
        <h1 className="carthead">CART: 2 ITEMS</h1>
      
        <Row>
        <Col xs={12} md={8}>ITEMS(S)</Col>
        <Col>QUANTITY</Col>
        <Col>TOTAL</Col>
        </Row>
        
        <hr/>
        
         
         {detail.map((e ,ind)=>{
          return  <Row>
            <Row>

            <Col xs={12} md={8}>
           <div className="itemdiv">
           <img src={e.image} alt="" className="itemimg"/>
           <div className="text">
           <h5>{e.title}</h5>
             <div className="price">
               <h5 > ${e.your_price}</h5>
           <h5 className="classp">${e.total_price}</h5>
           <h5 className="dis">{e.dis}</h5>
           </div>
          <select name="Move to Wishlist" id="" className="btnmove text">
            <option>Move to Wishlist</option>
            <option>Watch</option>

          </select>
           </div>
          
           </div>
            </Col>
            <Col >
      <div style={{display:"flex"}} className="text">
      <button className="qty"  onClick={() => {
                          handleQty(e.qty-1, e.id);
                        }}>-</button>
      <div className="plus">{e.qty}</div>
      <button className="qty" onClick={() => {
                            handleQty(e.qty+1, e.id);
                          }} >+</button>
      </div>
       <p onClick={()=>remove(e.id)}>REMOVE</p>
      </Col>
         <Col > <p className="text"></p>${e.your_price*e.qty}</Col>
           </Row>
         <hr></hr>
         <Row>
           <Col> <p>SHIPPING METHOD :</p></Col>
           <Col ><p className="col1">COUNTRY</p></Col>
           <Col><p className="col1">PIN-CODE/ZIP-CODE</p></Col>
         </Row>
           <Row>
             <Col  md={4}>
               <ButtonGroup>
  <Button variant="dark"  >Home Delivery</Button>
  <Button variant="light"class="outline" >Pickup in store</Button>
  </ButtonGroup>
  </Col>
             <Col  md={4}><select className="btnmove">
               <option>India</option>
               <option></option> 
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               </select></Col>
             <Col  md={4}>
              < input className="inbtn"/><button className="inbtn">button</button>
             </Col>
             </Row>
             <hr></hr>
            </Row>
            }
           )}
        
     
          
          
      {/* </Row> */}
       
    </Col>
    <Col xs={6} md={4}><h1 className="order">ORDER SUMMARY</h1>
    <Row>
      <div>
      <button className="enter_voucher">ENTER VOUCHER CODE</button><button className="enter_promo">VEIW PROMO CODE</button>
      </div>
     
    </Row>
    <Row>
      <div>
      <input type="text" className="promo"/> <button className="promobtn">APPLY</button>
      </div>
      
    </Row>
    <Row>
      <Col><h6 className="totorder">Order Total (1 Items)</h6></Col>
      
      <Col>{total}</Col>
     
      
    </Row>
    <Row>
    <Col><h6 className="totorder">Shipping</h6></Col>
    <Col>Free</Col>
    </Row>
    <Row>
    <Col><h6 className="totorder">Discount</h6></Col>
    <Col>-{dis}</Col>
    </Row>
    <Row>
    <Col><h2>YOU PAY</h2></Col>
    <Col><h2>{total-dis}</h2></Col>
    </Row>
    <Row>
    <Col><h5>INCLUSIVE OF ALL TAXES*</h5></Col>
   
    </Row>
    <Row>
    <Col><h6 className="save">YOU SAVE</h6></Col>
    <Col><h6 className="save">-{dis}</h6></Col>
    </Row>
    <Row>
     <Link to={"/procced"}><Button variant="dark">PROCEED TO CHECKOUT</Button></Link> 
    </Row>
    <Row>
      <Button variant="transparent">CONTINUE SHOPPING</Button>
    </Row>
    </Col>
  </Row>
  
</Container>
   

          
    </div>
  )
}












