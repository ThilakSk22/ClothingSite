import React from 'react'
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='LandingPageMain'>
      <div className='LandingContent'>
         <div className='LandingOffer'>
            <span></span>
            <h3> OFFER 2024</h3>
         </div>
         <div className='LandingHeading'>
            <p>SALE UP TO</p>
            <p className='Landing50Offer'>50% OFF</p>
         </div>
         <div className='LandingShopBtn'>
            <button>SHOP NOW</button>
         </div>



      </div>
      <div className='LandingImageContent'>

      </div>
    </div>
  )
}

export default Home