import { useEffect, useRef, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import "./categorypage.css";

export const Category=()=> {

  const [naveen, setNaveen] = useState([])
  
    useEffect(()=>{
  
    axios.get('https://fastrackq.herokuapp.com/products')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setNaveen(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    },[])
  
  
    return (
      <div>
        <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/122e5200-e41b-430d-a2c3-ad0a6c4f9280/desktop/2500x400.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-122e5200-e41b-430d-a2c3-ad0a6c4f9280-desktop-n.PUc24" alt="" />
          <div className='flex-container'>
            
              {naveen.map((e)=>{return <div className='product-container'>

                  <img  src={e.image} alt="watch_image" />
                  <h4>{e.title}</h4>
                  <div className='price_flex'>
                    <p>₹{e.discountedPrice}</p>
                    <p>{e.price}</p>
                    <p>{e.discount}</p>
                  </div>
                  <div className='label_div'>
                    <p className='label_div1'>{e.labelone}</p>
                    <p className='label_div2'>{e.labeltwo}</p>
                  </div>
                  <div className='productButton'>
                    {
                      
                    }
                    <Link className='Buttonlink'  to={`/product/${e._id}`}> Quick View</Link> 
                   
                    
                  </div>
              
                  </div>
              })
              }
        </div>

      </div>
    ); 
   


}