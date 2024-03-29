import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import { ProductDisplayProps } from '../../Types/type';


export const ProductDisplay: React.FC<ProductDisplayProps> = (props) => {

    const {product} = props;

    const {addToCart} = useContext(ShopContext)!;

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.imageUrl} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-prices">${product.price}</div>
                <div className="productdisplay-right-description">{product.description}</div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
  )
}
