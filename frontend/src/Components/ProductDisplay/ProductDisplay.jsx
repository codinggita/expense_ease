import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from '../Assests/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className = 'productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
         <img src={product.image} alt="" />
        </div>
        <div>
            <div className="productdisplay-img">
                <img className = 'productdisplay-main-img' src={product.img} alt="" />
            </div>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="product-prices">
            <div className="product-price-old">${product.old_price}</div>
            <div className="product-price-new">${product.new_price}</div>
        </div>
        <div className="product-description">
             Cloth  
        </div>
        <div className="product-size">
            <h1>Select Size</h1>
            <div className="select-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category: </span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span>Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
