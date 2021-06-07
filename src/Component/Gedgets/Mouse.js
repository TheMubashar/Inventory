import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function Mouse() {
    return (
        <div className="Mouse">
            <div className="list">
                <AdProduct title="Apple Magic Mouse 2" 
                    price={65.00} rating={5} sale={0} BasketInfo="Add To Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B016MUCHTS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3xH7ZXG" 
                />
                <AdProduct title="TECKNET Pro S2 High Performance Wired USB Mouse, upto 2000dpi" 
                    price={10.00} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01BC3TYDM&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3tg3X5u" 
                />
                <AdProduct title="Microsoft Surface Mobile Bluetooth Mouse - Platinum" 
                    price={29.99} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07FDGZR3N&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2SevcQN" 
                />
                <AdProduct title="Logitech G502 HERO Mouse, HERO 25K Sensor, 25 600 DPI, RGB" 
                    price={79.99} rating={5} sale={50} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07W7MQMD9&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e8Rkop"
                />
                <AdProduct title="Razer Basilisk X Hyperspeed" 
                    price={59.99} rating={5} sale={25} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07Y8QWZDW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3vxVOKV" 
                />
            </div>
            <div className="list">
                <AdProduct title="Bluetooth Mouse Compatible all devices, Rechargeable Noiseless Mini Wireless Mouse" 
                    price={16.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B081JY8Z7J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2PFKhtP" 
                />
                <AdProduct title="Wireless Mouse, Jelly Comb MS001 2.4G Computer Mice with Nano Receiver" 
                    price={11.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B075QDWD8X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3t4VHoN" 
                />
                <AdProduct title="Wired Mouse, VersionTech Wired Gaming Mice with 2400 DPI, 6 Buttons for Computer PC Laptop" 
                    price={19.99} rating={5} sale={51} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01FNRWFO8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2Rdmvpu" 
                />
                <AdProduct title="Gaming Mouse Wired, PICTEK 8 Programmable Buttons" 
                    price={18.99} rating={5} sale={0} BasketInfo="Add To Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07G37KZS7&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/332GoSO" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Mouse
