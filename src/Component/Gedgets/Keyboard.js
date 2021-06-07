import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function Keyboard() {
    return (
        <div className="Keyboard">
            <div className="list">
                <AdProduct title="Apple Magic Keyboard with Numeric Keypad - Space Gray" 
                        price={299.99} rating={5} sale={10} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07BR9ZBZ4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                        connection="https://amzn.to/3xyCoYp" 
                />
                <AdProduct title="Apple Magic Keyboard - A1644 (MLA22B/A) Wireless Bluetooth" 
                    price={99.50} rating={5} sale={30} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B075Z7DJXL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eIPauQ" 
                />
                <AdProduct title="Razer BlackWidow V3 Tenkeyless - Premium Mechanical Gaming Keyboard " 
                    price={99.99} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08CHLTKPR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3nEWc7Z" 
                />
                <AdProduct title="SteelSeries Apex 3, Premium Magnetic Wrist Rest, English Qwerty Layout PC" 
                    price={69.99} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B0831T7JNK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3nCZokl" 
                />
            </div>
            <div className="list">
                <AdProduct title="Cooler Master CK530 V2 Tenkeyless Mechanical Gaming Keyboard" 
                    price={78.46} rating={5} sale={23} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08MWCBH88&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3t5oqtn" 
                />
                <AdProduct title="AUKEY Mechanical Keyboard LED Backlit Gaming Keyboard with Blue Switches" 
                    price={59.99} rating={5} sale={51} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B071HBFN2T&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2RhBqz7" 
                />
                <AdProduct title="havit Wired RGB Mechanical Gaming Keyboard & Mouse Combo Set UK Layout" 
                    price={45.99} rating={5} sale={15} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07QR39DCW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3t9BCgU" 
                />
                <AdProduct title="HyperX Alloy FPS Pro Mechanical Gaming Keyboard - Cherry Blue" 
                    price={79.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07BKHP2NK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2QDWrUN" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Keyboard
