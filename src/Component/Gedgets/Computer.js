import React from 'react'
import AdProduct from "../AdProduct";
import "./main.css";

function Computer() {
    return (
        <div className="Computer">
            <div className="list">
                <AdProduct title="Optiplex Dell Intel i7-2600 Quad Core 16GB RAM 240GB SSD,1TB HDD Desktop PC Computer (Renewed)" price={230.75} rating={4} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07YST68J3&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/32ZpS5V" 
                />
                <AdProduct title="ACEPC Mini PC,8GB DDR4/ 256GB ROM Intel Celeron J4125 Processor, Support Triple Display, Gigabit Ethernet, Dual Band Wi-Fi, Bluetooth 4.2, 4K HD" price={359.99} rating={4} sale={21} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08LVM5D8X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3335lgU" 
                />
                <AdProduct title="Complete set of 21.5in Monitor and Dell OptiPlex Quad Core i5-2400 8GB 1000GB WiFi Windows 10 64-Bit Desktop PC Computer" price={164.59} rating={4} sale={6} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01E97I7UO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2R9fNAQ" 
                />
            </div>
            <div className="list">
                <AdProduct title="HP Elite 8300 SFF Quad Core i7-3770 3.4GHz 8GB 240GB SSD Desktop" price={188.00} rating={5} sale={6} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07W67YRJX&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eIXomz" 
                />
                <AdProduct title="Dell OptiPlex 790 DT 2nd Gen Corei3-2120 4GB DDR3 250GB HDD Wind 10 Professional" price={74.93} rating={5} sale={20} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07ZCZY3N4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e1FlZI" 
                />
                <AdProduct title="Beelink U57 Mini PC Intel Core i5-5257U (up to 3.1 GHz) 8GB RAM 256GB SSD" price={369.00} rating={5} sale={11} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07SG9RKXC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3u678xJ" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Computer
