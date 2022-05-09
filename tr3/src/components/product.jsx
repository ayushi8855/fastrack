import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


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

return ( <div>
  <div><img src={data.image} alt="" /></div>
  <div> {data.title} </div>
  <div> ₹{data.price}</div>
  <div>₹{data.discountedPrice}</div>
  <div>{data.discount}</div>
  <div>{data.labelone}</div>
  <div>{data.labeltwo}</div>

  {/* <button onClick={()=>{
    alert("product updated to cart")

    axios.patch('https://fastrackq.herokuapp.com/cart', {
      title:data.title,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });



  }}>
   +1
  </button> */}

 

  <button onClick={()=>{
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

  {/* <button onClick={()=>{
    alert("product updated to cart")

    axios.delete('https://fastrackq.herokuapp.com/cart', {
      title:data.title,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });



  }}>
   -1
  </button> */}

  </div>

)





}