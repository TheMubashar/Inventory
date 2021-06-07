import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import "./checkoutproducts.css"
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../StateManagment/actions";

function CheckoutProduct({title, price, rating, image}) {  
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <img className="productImg" src={image} alt="Product Dipslay"/>
            <p className="checkout_description">
                <strong>{title}</strong><br/>
                {Array(rating).fill().map(() => <StarRateIcon className="star" />)}<br/>
                <strong className="price">${price}</strong><br/>
                <button className="removeBtn" onClick={()=>dispatch(removeFromBasket(title))}>Remove from Basket</button>
            </p>
        </div>
    )
}

export default CheckoutProduct
