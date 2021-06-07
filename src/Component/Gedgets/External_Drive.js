import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function ExternalDrive() {
    return (
        <div className="ExternalDrive">
            <div className="list">
                <AdProduct title="WD 1 TB Elements Portable External Hard Drive - USB 3.0, Black" price={55.33} rating={5} sale={73} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B06VVS7S94&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/2S7BjX6" 
                />
                <AdProduct title="External DVD Drive USB 3.0 Type-C Pop Up Mobile CD Drive CD DVD +/-RW ROM" price={23.99} rating={5} sale={72} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08RWYKC8H&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e5jJf9" 
                />
                <AdProduct title="Samsung T5 500 GB USB 3.1 Gen 2 (10 Gbps, Type-C) (Portable SSD) Alluring Blue" price={88.99} rating={5} sale={20} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B074MCM721&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3vwwi93" 
                />
                <AdProduct title="SanDisk Extreme Portable SSD 1TB up to 550MB/s read" price={159.99} rating={5} sale={25} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B078STRHBX&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3nHNvd2" 
                />
            </div>
            <div className="list">
                <AdProduct title="External BluRay CD DVD Drive 3D,USB 3.0 Type C Bluray Disc Reader" price={78.99} rating={5} sale={15} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08CTV2C3P&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3u60gAx"
                />
                <AdProduct title="Pioneer 3D NAND External SSD(240 GB)-Portable Solid Drive" price={54.99} rating={5} sale={12} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07PXCYCX1&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/330075N" 
                />
                <AdProduct title="USB Flash Thumb Drive Memory Stick 1TB 2TB External Storage Pen Drive" price={29.91} rating={5} sale={15} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B091SJLH2X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eIQgqf" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default ExternalDrive
