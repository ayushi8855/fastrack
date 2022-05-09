import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./product.css";


export const Product=()=>{
    var {id} = useParams()
    console.log(id)
    // id = id.split(":")[1]
    console.log(id)


    const [data,setData] = useState({})

useEffect(()=>{
    axios.get(`https://fastrackq.herokuapp.com/products/${id}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })

},[])

return (
   <div>
     
        <div className="singleProduct_div">
            <div className="left_info">
                <img src={data.image} alt="watchImage" />
                <p style={{"text-align":"center"}}>{data.title}</p>
                {/* <div className="buttonss">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    {"_id":"62755a0831694910154efd76","image":"https://staticimg.titan.co.in/Fastrack/Catalog/68024AP02_1.jpg?pView=listing","title":"Reflex Smart Watch with Silicone Blue Strap","discountedPrice":3995,"price":5995,"discount":"(33% Off)","labelone":"No Cost EMI","labeltwo":"Smart Watch"}
                </div> */}
            </div>
            <div className="right_info">
                <div className="Product_heading">
                    <div>
                        <h1 >{data.title}</h1>
                        <p>38072AP01</p>
                    </div>
                    {/* <div className="reviews">
                        <p>1 2 3 4 5 28  reviews</p>
                        <button>₹</button>
                        <button>$</button>
                    </div> */}
                </div>
                <div className="product_price_div">

                    <p className="product_price_flex">
                      <h4>MRP ₹{data.price}</h4>
                      <h4>OFFER PRICE ₹{data.discountedPrice}</h4>
                      <h4>{data.discount} </h4>
                    </p>
                    
                      <p className="tax_msg" >(Inclusive of all taxes)</p>
                      <p className="EMIstarts">EMI STARTS AT ₹ 242. NO COST EMI AVAILABLE  CLICK HERE TO VIEW PLANS</p>
                      <p className="btn">
                     <button className="buttoncolor1">NO COST EMI</button>
                      <button className="buttoncolor2">SMART WATCH</button>  
                      </p>
                      
                      <p className="txt">Fastrack Digital Unisex Smart Watch with Black Strap</p> 
                </div>
                <div className="qty_div">
                    <p>Net Qty</p>
                    <div className="net_qty_button">
                        <button>-</button>
                        <p className="count">1</p>
                        <button>+</button>
                    </div>
                </div>
                <p>In stock</p>
                <div className="addToCart_div">
                    
                <button className="addtocart" onClick={()=>{
                      alert("product added to cart")

                      axios.post('https://fastrackq.herokuapp.com/cart', {
                        image:data.image,
                        title:data.title,
                        price:data.price,
                        discountedprice: data.discountedPrice,
                        discount: data.discount,
                        labelone:data.labelone,
                        labeltwo: data.labeltwo,
                      })
                      .then(function (response) {
                        console.log(response.data);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });



                    }}>
                    Add to Cart
                    </button>


                    <button>#</button>
                    <button className="book_apooi">Book an Appointment/ Video Call</button>
                </div>
            </div>
        </div>


        <div className="container-bottom">
            <div className='location'>
                {/* <h2>ZIPCODE/POSTALCODE CHECK</h2>
                 <div className="location-dropdown">
                    <h4>FREE SHIPPING & FREE RETURNS ON ALL ORDERS</h4>
                    <p>Find out more about our Delivery and Returns policy.</p>
                    <div className="btn-c">
                    <div>
                        <p>COUNTRY</p>
                        <select name="COUNTRY" id="" className='country'>
                            <option value="india">India</option>
                            <option value="india">America</option>
                            <option value="india">Brazil</option>
                            <option value="india">Russia</option>
                            <option value="india">Chad</option>
                            <option value="india">China</option>
                            <option value="india">Japan</option>
                            <option value="india">Bangladesh</option>
                            <option value="india">Germany</option>
                            <option value="india">Poland</option>
                            <option value="india">Argentina</option>
                            <option value="india">Australia</option>
                            <option value="india">Ireland</option>
                            <option value="india">Canada</option>
                            <option value="india">Portugal</option>
                            <option value="india">Spain</option>
                        </select>
                    </div>

                        <div>
                            <p>PINCODE</p>
                            <input type="text" placeholder='Pincode' className='pincode'/>
                        </div>
                        <button className='check'>CHECK</button>
                    </div> 
                </div>*/}
            </div>
    <div className='flex'>
           <div className='fixit'>
           <div className="sideBar">
                  <ul>
                  <li><h2>Description</h2></li>
                  <li><h3>Specs</h3></li>
                  <li><h3>Review</h3></li>
                  <li><h3>More info</h3></li>
                  </ul>
                  </div> 
           </div>
            <div className="mainbp">
                    
             <img src={require('./images/images/Slay1.jpg')} alt="" />
             <img src={require('./images/images/2.webp')} alt="" />
             <img src={require('./images/images/3.webp')} alt="" />
             <img src={require('./images/images/Stunners.webp')} alt="" />
             <img src={require('./images/images/5.webp')} alt="" />
            </div>
    </div>
</div>    
    </div> 


)
}
