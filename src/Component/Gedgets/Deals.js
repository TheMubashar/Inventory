import React from 'react'
import AdProduct from "../AdProduct";
import "./main.css";

function Deals() {
    return (
        <div className="deals">
            <div className="limitedTime">
                <strong className="dealHeader">Limited Time Deals <span className="headerBanner">May 02</span></strong>
                <div className="list">
                    {/* May 02 */}
                    <AdProduct title="Samsung Galaxy Ultra Mobile Smartphone" price={1199.00} rating={5} sale={41} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B084GQCNJH&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                        connection="https://www.amazon.co.uk/Samsung-Galaxy-Ultra-Mobile-Smartphone-Cosmic-Grey/dp/B084GQCNJH?_encoding=UTF8&linkCode=li3&tag=inventory0f-21&linkId=02acc36f7ef46996c6f4cd91e570ff65&language=en_GB&ref_=as_li_ss_il" 
                    />
                    {/* May 01 */}
                    <AdProduct title="Anti Theft Travel Backpack Laptop" price={165.99} rating={5} sale={45} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07M7DSGRD&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                        connection="https://www.amazon.co.uk/KORIN-ClickPack-Pro-Backpack-Waterproof/dp/B07M7DSGRD?_encoding=UTF8&linkCode=li3&tag=inventory0f-21&linkId=d1d626c81c9d099aeaf7ca37e428950a&language=en_GB&ref_=as_li_ss_il" 
                    />
                    {/* May 03 */}
                    <AdProduct title="Duronic Monitor Arm | Double PC Desk Mount" price={49.99} rating={5} sale={40} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OJ16SDO&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                        connection="https://amzn.to/3gS1kEa" 
                    />
                    {/* May 03 */}
                    <AdProduct title="XP-Pen Artist22E Pro 22inch FHD IPS Graphic Pen" price={700.00} rating={5} sale={39} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M28DHOA&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                        connection="https://amzn.to/3uhjnrv" 
                    />
                    {/* May 03 */}
                    <AdProduct title="ESR Screen Protector for iPad" price={39.99} rating={5} sale={78} BasketInfo="Get Voucher"
                        image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B073PVPJBX&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                        connection="https://amzn.to/2S56XEC" 
                    />
                </div>
            </div>
            <div className="list">
                {/* Jun 01 */}
                <AdProduct title="Canon EOS M50 + EF-M 18-150mm kit" price={889.99} rating={5} sale={11} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07VZH1YYQ&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                    connection="https://amzn.to/32XjEUp" 
                />
                {/* May 05  */}
                <AdProduct title="LG UltraGear 27 Inch Gaming Monitor(2560 x 1440) " price={499.99} rating={5} sale={20} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B088M1VPSG&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                    connection="https://amzn.to/2RbymUU" 
                />
                {/* May 08 */}
                <AdProduct title="World’s First MPP Fine-Tip Dual Stylus Pe" price={89.99} rating={4} sale={64} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08D8ZMZRK&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                    connection="https://amzn.to/3xyyHSu" 
                />
                {/*  */}
                <AdProduct title="Telescopes for Kids,70mm Astronomy Refractor" price={139.99} rating={5} sale={53} BasketInfo="Get Voucher"
                    image="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0811JK7W4&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=inventory0f-21&language=en_GB" 
                    connection="https://amzn.to/3t4Hica" 
                />
            </div>
            
            <div className="LoadMore">
                <button className="LoadMoreBtn">Load More Products</button>
            </div>
        </div>
    )
}

export default Deals
