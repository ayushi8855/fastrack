import React from 'react'
import './Footer.css'
export const Footer = () => {
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
                       <div>
                           <h4>FOLLOW US ON
                             <img src="" alt="" />
                             <img src="" alt="" />
                             <img src="" alt="" />
                             <img src="" alt="" />
                             <img src="" alt="" />
                           </h4>
                       </div>
                       <div><h4>NEED HELP?</h4></div>
                       <div><a href="#">Click Here</a> to Chat with us on </div>
                       <div className='tandd'><h6>TERMS & CONDITIONS</h6><h6>PRIVACY POLICY</h6></div>
                   </div>
               </div>
              
           </div>
           <hr className="hr"/>
           <div className='icons-row'>
               <img src="" alt="" />
               <img src="" alt="" />
               
           </div>
      </footer>
  )
}
