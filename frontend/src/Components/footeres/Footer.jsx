import React from 'react'
import './Footer.css'
import {require} from "react"


const url1 = "https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png?20170210095314"

const url2 ="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
const url3 ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
const url4 ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
const url5 ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"
const url11 ="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/300px-Axis_Bank_logo.svg.png?20100223155056"
const url12 ="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/304px-ICICI_Bank_Logo.svg.png?20180808221300"
const url13 ="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo-500x281.png"

const url6 ="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815261-jd08_84586.png"
const url7 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png"
const url8 ="https://www.pngfind.com/pngs/m/208-2087957_difference-between-visa-mastercard-and-rupay-card-transparent.png"
const url9 ="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png"

const url10 ="https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/maestro.png"
const url15 ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"


 function Footer () {
  return (
      <footer className="footer">
           <div className="container">
               <div className="row">
                   <div className="footer-col">
                       <h4>CUSTOMER SERVICE</h4>
                       <ul>
                           <li><a href="#">Payment Option</a></li>
                           <li><a href="#">Track Order</a></li>
                           <li><a href="#">Find a Store</a></li>
                           <li><a href="#">Encircle Program</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>CONTACT US</h4>
                       <ul>
                           <li>1800-266-0123</li>
                           <li>customercare@titan.co.in</li>
                           <li><a href="#">Frequently Asked Questions</a></li>
                           
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>POLICIES</h4>
                       <ul>
                           <li><a href="#">Returns & Exchanges</a></li>
                           <li><a href="#">Cancellation</a></li>
                           <li><a href="#">Shipping</a></li>
                           <li><a href="#">Warranty Policies</a></li>
                           <li><a href="#">Delivery Information</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>ABOUT FASTRACK</h4>
                       <ul>
                           <li><a href="#">About Us</a></li>
                           <li><a href="#">Careers</a></li>
                       </ul>
                   </div>
                   
                   <div className="footer-col download">
                       <h4>DOWNLOAD WORLD OF TITAN APP</h4>
                      <div className='appstore-playstore'>
                          <a href="https://apps.apple.com/us/app/world-of-titan/id1351637761?ls=1"><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/061ef9c8-b270-4682-b17f-6a502cf02883/untitled+%282%29.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-061ef9c8-b270-4682-b17f-6a502cf02883-n8IsoXP" className='store-icon' /></a>
                          <a href="https://play.google.com/store/apps/details?id=com.titancompany.tx37consumerapp&cm_sp=Homepage-_-footer-_-AndroidAppLogo"> <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/eadd303c-fd71-46e5-80b8-7992a55bcc20/google-play-badge.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-eadd303c-fd71-46e5-80b8-7992a55bcc20-mX6299t" className='store-icon' /></a>
                      </div>
                       <div className='logos'>
                           <h4>FOLLOW US ON</h4>
                           <img src = {url1}/>
                           <img src ={url2}/>
                           <img src ={url3}/>
                           <img src ={url4}/>
                           <img src ={url5}/>
                           
                       </div>
                       <div><h4>NEED HELP?</h4></div>
                       <div><a href="#">Click Here</a> to Chat with us on  <img style ={{"height":"30px"}}src={url15} alt="" /></div>
                       <div className='tandd'><h6>TERMS & CONDITIONS</h6><h6>PRIVACY POLICY</h6></div>
                   </div>
               </div>
              
           </div>
           <hr className="hr"/>
           <div className='icons-row'>
           <img src ={url6}/>
           <img src ={url7}/>
           <img src ={url8}/>
           <img src ={url9}/>
           <img src ={url10}/>
           <img src ={url11}/>
           <img src ={url12}/>
           <img src ={url13}/>
           
            
           </div>
      </footer>
  )
}

export default Footer
