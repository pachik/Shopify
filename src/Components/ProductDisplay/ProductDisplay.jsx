import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} =useContext(ShopContext)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt='' height='150px' />
          <h3>{product.name}</h3>
          <img src={product.image} alt='' height='150px' />
          <img src={product.image} alt='' height='150px' />

        </div>
        <div className="productdisplay-image">
          <img className='productdisplay-main-img' src={product.image} alt='' height='300px' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.image}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt='' height='20px' />
          <img src={star_icon} alt='' height='20px' />
          <img src={star_icon} alt='' height='20px' />
          <img src={star_icon} alt='' height='20px' />
          <img src={star_dull_icon} alt='' height='20px' />
          <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">

          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta laudantium repudiandae velit exercitationem earum labore distinctio corporis iusto rerum optio, expedita tenetur accusantium, dolorum porro et deserunt, soluta cum.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>

          </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>Category:<span> Women, T-Shirt, Crop Top</span></span>
        </div>
        <div className="productdisplay-right-category">
          <span>Tags:<span> Modern, Latest, Trends</span></span>
        </div>

      </div>


    </div>


  )
}

export default ProductDisplay;
