import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function Headphones() {
    return (
        <div className="Headphones">
            <div className="list">
                <AdProduct title="Sony WH-CH510 Wireless Bluetooth Headphones" 
                    price={50.00} rating={5} sale={30} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07WD58H6R&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e4Xl5m" 
                />
                <AdProduct title="JBL T500BT in Black – Over Ear Bluetooth Wireless Headphones" 
                    price={44.99} rating={5} sale={44} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07HGG85HL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3vzURlE" 
                />
                <AdProduct title="Wireless Earbuds w/ 4 Dynamic Drivers, IPX6 Waterproof" 
                    price={39.99} rating={5} sale={51} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08ZBZ5SBD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2PH3Dim"
                />
                <AdProduct title="Sennheiser HD 206 Stereo Headphone" 
                    price={27.77} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01N7S0IPR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3gSq67d" 
                />
            </div>
            <div className="list">
                <AdProduct title="JVC Lightweight Headphones - Black" 
                    price={8.86} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B000I2J4S4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e6cYtn" 
                />
                
                <AdProduct title="Sennheiser HD 560S, Open back reference-grade headphones for audio enthusiasts, Black" 
                    price={169.00} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08HNFV61M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3t5mQaT" 
                />
                <AdProduct title="zihnic Bluetooth Over-Ear Headphones (Rose Gold)" 
                    price={20.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07K1T1WWF&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3xCRVqc" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Headphones
