import React, { createContext, useState } from 'react'
import all_product from '../Components/all_product.js'

export const ShopContext = createContext(null);

    // create a empty cart
    const getDefaultCart = ()=>{
        let cart = {};
        for (let index=0; index < 300+1; index++){
            cart[index] = 0;
        }
        return cart;
    }

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());

    // Add items to the Cart function
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    // Remove Cart Item from the Cart function
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // Total Cart Amount function
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Total Cart Item at the top right hand corner
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // using context can access the cartItems in any components
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

