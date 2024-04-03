import React from 'react'
import "../styles/Shop.css";
import { ShopCardData } from "../components/StoreData"


const Shop = () => {
  return (
    <div className='ShopComp'>
      <div className='ShopHeading'>
        <p>SHOP</p>
      </div>
      <div className='ShoppingComp'>
        <div className='ShopButtons'>
          <button>All</button>
          <button>WOMEN</button>
          <button>KIDS</button>
        </div>

        <div className='ShoppingCardsComp'>

          {
            ShopCardData.map((data, index) => {
              return(
              <div className='ShoppingCard' key={index}>
                <div className='CardImage'>
                  <img src={data.image} alt={data.ClothesName} />
                </div>
                <div className='CardContent'>
                  <div className='CardReview'>
                     <p>⭐⭐⭐⭐ <span style={{ color:"grey" }}>( {data.reviews} Reviews )</span></p>
                  </div>
                  <div className='CardClothesName'>
                     <p>{data.ClothesName}</p>
                  </div>
                  <div className='CardClothesAmount'>
                     <p>₹{data.Price}</p>
                  </div>
                </div>
              </div>
              )
            })
          }

        </div>
      </div>
      <div className='ShopBanner'>
         <div className='ShopBannerImage'>
            <img src={require("../assets/NewArrivals.png")} />
         </div>
      </div>
    </div>
  )
}

export default Shop