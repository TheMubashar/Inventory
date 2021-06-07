import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function Subtotal() {
    let Basket = useSelector(state=> state.basketReducer);
    let User = useSelector(state=> state.userReducer.user);
    
    // useHistory hep us to change the url programmically
    const history = useHistory();
    const proceedPayment = ()=>{
        if(!User && Basket.basket.length>0){
            history.push('/login');
        }else if(Basket.basket.length===0){
            alert("Add some items to your cart");
        }else{
            history.push('/payment');
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) =>(
                <>
                    <p>Subtotal ({Basket.basket.length} items):<strong>{value}</strong></p>
                    <small className="subtotalGift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={Basket?.price} //do it yourself
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
            />
            <button onClick={proceedPayment}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
