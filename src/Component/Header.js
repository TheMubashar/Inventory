import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import "./header.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Header({mobileView}) {
    const [menu, setmenu] = useState(true);
    const [showCategories, setshowCategories] = useState(false);
    let BasketItems = useSelector(state=> state.basketReducer.basket);
    let User = useSelector(state=> state.userReducer.user);
    console.log(User);
    const handleAuth =()=>{
        if(User){
            auth.signOut();
        }
    }
    const mobileMenu =()=>{
        if(!menu){
            setmenu(true)
        }else{
            setmenu(false)
        }
    }
    const categoriesDisplay =()=>{
        if(!showCategories){
            setshowCategories(true)
        }else{
            setshowCategories(false)
        }
    }
    return (
        <>
        <div className="header">
            <Link to="/">
            {!mobileView?(
                // Brand Name/Logo
                <h1 className="BrandName">INVENTORY</h1>
            ):(    
                <h3 className="BrandName">INVENTORY</h3>
                
            )}
            </Link>
            {mobileView?(
                <>
                <div>
                    <DehazeIcon className="dehazeIcon" onClick={mobileMenu}/>
                </div>
                </>
            ):(
                <>
                    {/* Search Box */}
                    <div className="search_bar">
                        <input className="searchInput" type="text" placeholder=" Search by Item"/>
                        <span className="searchIcon">
                            <SearchIcon/>
                        </span>
                    </div>

                    {/* Navigation */}
                    <div className="nav">
                        <Link to={!User && "/login"}>
                            <div onClick={handleAuth} className="option">
                                <span className="lineOne">Hello, {!User? "Guest": User.displayName}</span>
                                <span className="lineTwo">{User? "Sign Out":"Sign In"}</span>
                            </div>
                        </Link>   
                        <div className="option">
                            <span className="lineOne">Return</span>
                            <span className="lineTwo">& Order</span>
                        </div>
                        <Link to="/checkout">
                            <div className="basket">
                                <ShoppingBasketIcon />&nbsp;
                                <span className="basketCount">{BasketItems.length}</span>        
                            </div>
                        </Link>
                    </div>
                </>
            )}
        </div>
        
        {mobileView && menu?(
            <div className="mobileMenu">                
                <h4 onClick={categoriesDisplay}>Categories</h4>
                
                {showCategories?
                    <center>
                        Workout at Home<br/>
                        Gadgets<br/>
                        Cosmetics Products<br/>
                        Clothing
                    </center>
                :(<></>)}              
                
                <Link to="/checkout">
                    <h4 className="mobileBasket">Basket</h4>
                </Link>
                <Link className="mobileSignInLink" to={!User && "/login"}>
                    <button className="mobileSignInBtn">Sign In</button>
                </Link>   
            </div>
        ):(<></>)}
        
        </>
    )
}

export default Header
