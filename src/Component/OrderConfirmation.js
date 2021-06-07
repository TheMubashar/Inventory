import React from 'react'
import { useSelector } from "react-redux"
import Product from "./CheckoutProducts"
import "./payment.css"

function Order() {
    let BasketItems = useSelector(state=> state.basketReducer.basket);
    return (
        <div className="Order">
            {BasketItems.map(item=>(
                <Product 
                    title={item?.title}
                    price={item?.price}
                    rating={item?.rating}
                    image={item?.image} />))
            }
        </div>
    )
}

export default Order
