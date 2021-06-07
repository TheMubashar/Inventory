import React from 'react'
import AdProduct from "../AdProduct"
import "./main.css"

function Laptop() {
    return (
        <div className="Laptop">
            <div className="list">
                <AdProduct title="Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Gold (November 2020)" 
                    price={999.00} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B08N5NHG4H&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3ucAXwv" 
                />
                <AdProduct title="Acer Nitro 5 AN515-44 15.6 Inch  Laptop (AMD Ryzen 5 4600H Mobile Processor, 8 GB RAM, 512 GB SSD, NVIDIA GTX 1650, Full HD 144Hz Display, Windows 10, Black)" 
                    price={749.00} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B089BJY21X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eammfz" 
                />
                <AdProduct title="Acer Nitro 5 AN515-55 15.6 inch Laptop (Intel Core i5-10300H, 8GB RAM, 512GB SSD, NVIDIA GTX 1660Ti, Full HD 144Hz Display, Windows 10, Black)" 
                    price={899.99} rating={5} sale={11} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B089BPTN87&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3eJA5Jr" 
                />
                <AdProduct title="Apple MacBook Air MD711LL/B - 11.6-Inch Laptop (4GB RAM, 128 GB HDD, OS X Mavericks) (Renewed)" 
                    price={439.00} rating={5} sale={10} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B00M4LWUT2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3ufUCvC" 
                />
            </div>
            <div className="list">
                <AdProduct title="HP 250 G5 (2EW12ES#ABU) 15.6-inch Laptop Intel Core i5-7200U 2.5 GHz / 3.1 GHz Turbo Processor, 8GB RAM, 1TB HDD, Full HD Display (1920 x 1080 Resolution), HDMI, Card Reader, USB 3.0, Windows 10 Home" 
                    price={599.99} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B0764BSMNN&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3387Ej0" 
                />
                <AdProduct title="ASUS 15.6 ChromeBook C523NA (Intel Celeron N3350, 4 GB RAM, 64 GB eMMC, Chrome OS), Silver)" 
                    price={78.46} rating={5} sale={22} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07MVWCJLH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e60WQK" 
                />
                <AdProduct title="Dell XPS 13 FHD Thin and Light, InfinityEdge Laptop, Intel Core i5-10210U, 8 GB RAM, 256GB SSD, Windows 10 Home (Silver)" 
                    price={960.21} rating={4} sale={27} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B082G1JBT2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3e7vYHO" 
                />
                <AdProduct title="Dell Inspiron 15 3000 15.6 Inch FHD Anti-Glare LED-Backlit 2019 Laptop - (Silver) AMD Ryzen 5-2500U with Radeon Vega 8 Graphics, 8 GB RAM, 256 GB SSD, Windows 10 Home" 
                    price={699.96} rating={5} sale={0} BasketInfo="Add to Basket"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B07M741WKD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=inventory0f-21" 
                    connection="https://amzn.to/3aUK25o" 
                />
            </div>
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Laptop
