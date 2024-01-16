import { useState } from 'react'
import './ListProduct.css'
import { useEffect } from 'react';
import cross_icon from '../../assets/cart_cross_icon.png'

export const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch("http://localhost:4000/allproducts")
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)})
    }

    useEffect(()=>{
        fetchInfo();
    })

    // remove items
    const remove_prodcut = async(id)=>{
        await fetch("http://localhost:4000/removeproduct",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id:id})
        })
    }

    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return <> 
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{remove_prodcut(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
                    </div>
                    <hr />
                    </>
                })}
            </div>
        </div>
    )
}
