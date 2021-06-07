import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import "./adproduct.css"

function Product({title, price, rating, image, connection, sale, BasketInfo}) {
    return (
        <a className="ads" target="blank" href={connection}>
            <div className="adproduct">
                <center className="adtitle">
                    <p className="AdProductTitle">{title}</p>
                    <div className="priceAndDiscount">
                        <strong className="price">£{price} </strong>
                        {(sale>0)?
                            <strong className="sale"> {sale}%OFF</strong>
                        :<></>}
                    </div>
                    {Array(rating).fill().map(() => <StarRateIcon className="adstar" />)}
                </center>
                <img className="adproductImg" src={image} alt="Product Dipslay"/>
                <button className="adbasketBtn">{BasketInfo}</button>
            </div>
        </a>
    )
}

export default Product
