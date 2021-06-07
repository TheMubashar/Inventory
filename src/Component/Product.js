import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import "./product.css"
import { useDispatch } from "react-redux";
import { addToBasket } from "../StateManagment/actions";

function Product({title, price, rating, image}) {  
    const dispatch = useDispatch();
    const item ={
        "title":title,
        "price":price,
        "rating":rating,
        "image":image
    }
    return (
        <div className="product">
            <center className="title">
                {title}<br/>
                <strong className="price">£{price}</strong><br/>
                {Array(rating).fill().map(() => <StarRateIcon className="star" />)}
            </center>
            <img className="productImg" src={image} alt="Product Dipslay"/>
            <button className="basketBtn" onClick={()=>dispatch(addToBasket(item))}>Add to Basket</button>
        </div>
    )
}

export default Product
