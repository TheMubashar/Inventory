import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function Controller() {
    return (
        <div className="Controller">
            <div className="list">
                <AdProduct title="Xbox Wireless Controller – Carbon Black" price={54.99} rating={5} sale={4} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07SDFLVKD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3xAnO2l" 
                />
                <AdProduct title="PlayStation 5 DualSense Wireless Controller" price={60.88} rating={5} sale={7} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08H99BPJN&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3gPLfPj" 
                />
                <AdProduct title="Sony PlayStation DualShock 4 Controller - Black" price={54.39} rating={5} sale={29} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01GVQUX3U&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e6cYtn" 
                />
                <AdProduct title="Xbox Wireless Controller – Robot White" price={54.99} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B087VLP2RT&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e2oyps" 
                />
                <AdProduct title="PowerA Enhanced Wired Controller for Xbox" price={34.39} rating={5} sale={20} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08F45381B&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3t0WRBH" 
                />
            </div>
            <div className="list">
                <AdProduct title="Xbox Elite Wireless Controller Series 2" price={158.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07SR4R8K1&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3ucBNJW" 
                />
                <AdProduct title="Sony PlayStation DualShock 4 Controller - Red" price={54.99} rating={5} sale={12} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01M4KLNE6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3vAKpKD" 
                />
                <AdProduct title="Zexrow Switch Controller Wireless Switch Pro Controller" price={25.88} rating={5} sale={31} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B088TRGW4W&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eOuHVw" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Controller
