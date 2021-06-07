import React,{useEffect} from 'react'
import "./checkout.css"
import Subtotal  from "./Subtotal";
import Product from "./CheckoutProducts";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useSelector } from "react-redux";
import { firebaseAnalytics } from '../firebase';

function Checkout({mobileView}) {
    useEffect(()=>{
        firebaseAnalytics.logEvent("Checkout_visited");
    })
    let BasketItems = useSelector(state=> state.basketReducer.basket);
    return (
        <div className="checkOut">
            {!mobileView?(
                <>
                <div className="leftSide">                
                    <iframe 
                        title="Ad Banner"
                        src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=piv&banner=0E183RXMV88X6J8GJ002&f=ifr&linkID=17f8af1976bcfa141da5164a80a56c72&t=inventory0f-21&tracking_id=inventory0f-21" 
                        width="728" height="90" scrolling="no" border="0" marginwidth="0" frameborder="0"></iframe>

                    <div className="basketTitle">
                        <h2>Your Shopping Basket </h2>
                    </div>
                    <div className="itmesList">
                    {
                        BasketItems.length>0? (
                            BasketItems.map(item=>(
                                <Product 
                                    title={item?.title}
                                    price={item?.price}
                                    rating={item?.rating}
                                    image={item?.image} />
                                    ))
                        ) : (
                            <div className="emptyBasket">
                                <center>
                                    <h1 className="emptyBasketDescription">Cart is empty <MoodBadIcon style={{ fontSize: 50 }}/></h1>
                                    <AddShoppingCartIcon color="black" style={{ fontSize: 100 }}/>
                                </center>
                            </div>
                        )
                    }
                </div>
            </div>
                
            <div className="rightSide">
                <Subtotal />
            </div>
            </>    
            ):(
               <center>
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=primevideo&banner=0JJJJ1EZN8GHBDTWY7G2&f=ifr&linkID=d0392652f8837ce654d1062fbf3d24f8&t=inventory060-20&tracking_id=inventory060-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" frameborder="0"></iframe>
                <hr/>
                <div className="itmesList">
                    {
                        BasketItems.length>0? (
                            BasketItems.map(item=>(
                                <Product 
                                    title={item?.title}
                                    price={item?.price}
                                    rating={item?.rating}
                                    image={item?.image} />
                                    ))
                        ) : (
                            <div className="emptyBasket">
                                <center>
                                    <h1 className="emptyBasketDescription">Cart is empty <MoodBadIcon style={{ fontSize: 50 }}/></h1>
                                    <AddShoppingCartIcon color="black" style={{ fontSize: 100 }}/>
                                </center>
                            </div>
                        )
                    }
                </div>
                <br/>
                <Subtotal />
               </center> )}
        </div>
    )
}

export default Checkout
