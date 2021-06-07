import React, { useEffect, useState } from 'react'
import "./home.css"
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import AdProduct from "./AdProduct";
import Category from "./Category";
import { firebaseAnalytics } from '../firebase';

function Home({mobileView}) {
    const [tabView, settabView] = useState(false);
    const TabView= ()=>{
        if(window.innerWidth<=700){
            settabView(true);
        }else if(window.innerWidth>700){
            settabView(false);
        }
    }
    useEffect(()=>{
        firebaseAnalytics.logEvent("Homepage_visited");
        // Changes on screen size
        TabView();  
    })
    window.addEventListener('resize',TabView);
    return (
        <div className="home">
            {!mobileView?(
                <>
                    {/* Slider */}
                    <ImageSlider className="homeImage" slides={SliderData} />
                    {/* Categories */}
                    <div className="firstrow">
                        <Category connection="gadgets" description="Gadgets" Image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1614517098/CategoriesImages/Gaming_shklbd.jpg" />
                        <Category connection="clothing" description="Clothing" Image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1614519546/CategoriesImages/Clothing_pvzaqk.jpg" />
                        <Category description="Workout at Home" connection="workout" Image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1614515304/CategoriesImages/1_u6a9qs.jpg" />
                        <Category connection="cosmetics" description="Cosmetics Products" Image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1614517802/CategoriesImages/Cosmetics_voa2xw.jpg" />
                    </div>
                    {/* First product row */}
                    <div className="row">
                        <AdProduct title="Tommy Hilfiger Men's Track Top Sweatshirt" price={43.53} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617826678/ProductImages/Tommy_Hilfiger_Men_s_Track_eyvz2n.png" 
                            connection="https://www.amazon.co.uk/Tommy-Hilfiger-Sweater-Blazer-Manufacturer/dp/B0788C6PHD?dchild=1&keywords=tommy&qid=1617826153&s=clothing&sr=1-3&linkCode=li2&tag=inventory0f-21&linkId=55b3b0e0659aa0d927000a70a29418c5&ref_=as_li_ss_il" />
                        <AdProduct title="Men's Basic Cotton Coverall Work Utility," price={52.86} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618611287/ProductImages/Dickies_Men_s_Basic_Cotton_Coverall_Work_Utility_bjponh.png" 
                            connection="https://www.amazon.co.uk/Dickies-Blended-Coverall-XL-Regular/dp/B005HJ8PKG?dchild=1&keywords=Basic+Cotton+Coverall&qid=1618610710&s=clothing&sr=1-1&linkCode=li2&tag=inventory0f-21&linkId=83e71be4107643054964db4ea7bf1322&language=en_GB&ref_=as_li_ss_il" />
                        <AdProduct title="Apron,Women Men Denim Apron Adjustable" price={35.99} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618611588/ProductImages/Cotton_Denim_Artist_Work_Apron_with_Pockets_Cross_Straps_Adjustable_wn7zxd.png" 
                            connection="https://www.amazon.co.uk/Jeanerlor-Cotton-Convenient-Pockets-Adjustable/dp/B08D6XWYTB?dchild=1&keywords=Denim+Apron+Adjustable&qid=1618611448&s=clothing&sr=1-6&linkCode=li2&tag=inventory0f-21&linkId=23266c1a4620ffbbee5953c5faa7a953&language=en_GB&ref_=as_li_ss_il"/>
                    </div>
                    {/* Second product row */}
                    <div className="row">
                        <AdProduct title="Tommy Hilfiger Leather Wallet" price={28.20} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617861312/ProductImages/Tommy_Hilfiger_Leather_RFID_Extra_Capacity_Trifold_Wallet_eqtlnm.png"
                            connection="https://www.amazon.co.uk/gp/product/B07L3M5H1F?ie=UTF8&linkCode=li2&tag=inventory0f-21&linkId=9be14d1c340da96e437a53646ba7ea4f&ref_=as_li_ss_il" />
                        <AdProduct title="Sheep Leather Driving Gloves" price={25.99} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618609402/ProductImages/Genuine_Sheepskin_Leather_Gloves_For_Women_Winter_Warm_Cashmere_Lining_Touchscreen_Texting_Driving_Motorcycle_Dress_Gloves_fedwvv.png"
                            connection="https://www.amazon.co.uk/dp/B07W84VGGC?psc=1&pd_rd_i=B07W84VGGC&pd_rd_w=1QCdx&pf_rd_p=395f87e5-7923-465a-b450-eb84f1966add&pd_rd_wg=K8zMb&pf_rd_r=BGF0F67M19RP70WSX74P&pd_rd_r=42d857bc-d1f3-4cb0-8120-80bdeb08ae0c&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRk9VNVRHUTNKRzkxJmVuY3J5cHRlZElkPUEwODE5MzU2MjZCSDJWU0tQMENBQiZlbmNyeXB0ZWRBZElkPUEwODkxMzAyQzQwVE81T0sxVEE4JndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=li3&tag=inventory0f-21&linkId=aaa75a1bb7733c9eb66254f4c2942e4b&language=en_GB&ref_=as_li_ss_il"/>
                        <AdProduct title="Abollria Womens Long Sleeve" price={26.99} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618606245/ProductImages/Abollria_Womens_Long_Sleeve_Turtle_Neck_Chunky_Cable_Knitted_Jumper_Knitwear_Sweater_Dress_vtupys.png" 
                            connection="https://www.amazon.co.uk/dp/B08LD1SDMQ?pd_rd_i=B08LD1SDMQ&pd_rd_w=0KCc5&pf_rd_p=f388d75d-7ab7-4c34-b7db-4c9f2e822f57&pd_rd_wg=j0lNo&pf_rd_r=PV9WG0YF9GMHE700J8KA&pd_rd_r=1d4ae55c-abbd-4af7-b988-8a2d645500e2&smid=ASZVCSSC8VVZ3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBQVlCOEpVOFhPUFUmZW5jcnlwdGVkSWQ9QTAxMTYzNTczMU9DR0kxVTdKWTJSJmVuY3J5cHRlZEFkSWQ9QTA3NTI4NDAxOUVMVVBWR01SQllZJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1&psc=1&linkCode=li3&tag=inventory0f-21&linkId=8e4b9821a5875d9f49454f1c2255658f&language=en_GB&ref_=as_li_ss_il" 
                        />
                        <AdProduct title="Mens Classic Plain Hoodie (22 Colours)" price={15.99} rating={5} sale={0}  BasketInfo="Add to Basket"
                            image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618610539/ProductImages/Mens_Classic_Plain_Pullover_Hooded_Sweatshirt_Hoodie_Sweater_22_Colours_rchpwl.png" 
                            connection="https://www.amazon.co.uk/UC502-300GSM-Classic-Hooded-Sweatshirt/dp/B01M7RGSHG?dchild=1&keywords=white+hoodie&qid=1618609636&s=clothing&sr=1-2&linkCode=li3&tag=inventory0f-21&linkId=527f036ab3c514a97b93ad9f0c031a6c&language=en_GB&ref_=as_li_ss_il"/>
                    </div>
                </>
            ):(
                <>
                {/* 75% Off */}
                <div className="mobileRow">
                    {!tabView?
                        <AdProduct title="Mens Classic Plain Hoodie (22 Colours)" price={15.99} rating={5} sale={0}  BasketInfo="Add to Basket"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1614847383/ProductImages/Hoodie_tmdvnv.jpg" 
                        connection="https://www.amazon.co.uk/UC502-300GSM-Classic-Hooded-Sweatshirt/dp/B01M7RGSHG?dchild=1&keywords=white+hoodie&qid=1618609636&s=clothing&sr=1-2&linkCode=li3&tag=inventory0f-21&linkId=527f036ab3c514a97b93ad9f0c031a6c&language=en_GB&ref_=as_li_ss_il"/>
                    :<></>}
                    <AdProduct title="Women's Casual Floral High Neckline" price={25.99} rating={5} sale={36}  BasketInfo="Get Voucher"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1618041391/ProductImages/Vera_mucca_Women_s_Casual_Floral_Tunic_High_Neckline_Dress_tuxv2j.png" 
                        connection="https://www.amazon.co.uk/Vera-mucca-Turtleneck-Dresses-Checkered/dp/B08FDQVLFB?&linkCode=li2&tag=inventory0f-21&linkId=b1111d4121959c79c806441e410d4604&language=en_GB&ref_=as_li_ss_il" 
                    />
                </div>
                <div className="mobileRow">
                    <AdProduct title="Apple AirPods Pro" price={249.00} rating={5} sale={0}  BasketInfo="Add to Basket"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617416682/ProductImages/Apple_AirPods_Pro_fg47rb.png" 
                        connection="https://www.amazon.com/gp/product/B07ZPC9QD4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07ZPC9QD4&linkCode=as2&tag=inventory060-20&linkId=6e79732f5fa9b5e975b888ffc0c6761b" 
                    />
                    {!tabView?
                        <AdProduct title="Tommy Hilfiger Men's Track Top Sweatshirt" price={43.53} rating={5} sale={0}  BasketInfo="Add to Basket"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617826678/ProductImages/Tommy_Hilfiger_Men_s_Track_eyvz2n.png" 
                        connection="https://www.amazon.co.uk/Tommy-Hilfiger-Sweater-Blazer-Manufacturer/dp/B0788C6PHD?dchild=1&keywords=tommy&qid=1617826153&s=clothing&sr=1-3&linkCode=li2&tag=inventory0f-21&linkId=55b3b0e0659aa0d927000a70a29418c5&ref_=as_li_ss_il" />
                    :<></>}
                    
                </div>
                <div className="mobileRow">
                    <AdProduct title="Levi's Women's High Rise Skinny " price={43.99} rating={5} sale={75}  BasketInfo="Get Voucher"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617825777/ProductImages/Levis_Womens_Skinny_Jeans_fgus1l.png" 
                        connection="https://www.amazon.co.uk/dp/B08BR8FPGR?&linkCode=li3&tag=inventory0f-21&linkId=a60ca7f1ba1d554efe5087fb7455d88c&ref_=as_li_ss_il" 
                    />
                    {!tabView?
                        <AdProduct title="Tommy Hilfiger Track Top Sweatshirt" price={43.53} rating={5} sale={0}  BasketInfo="Add to Basket"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617826678/ProductImages/Tommy_Hilfiger_Men_s_Track_eyvz2n.png" 
                        connection="https://www.amazon.co.uk/Tommy-Hilfiger-Sweater-Blazer-Manufacturer/dp/B0788C6PHD?dchild=1&keywords=tommy&qid=1617826153&s=clothing&sr=1-3&linkCode=li2&tag=inventory0f-21&linkId=55b3b0e0659aa0d927000a70a29418c5&ref_=as_li_ss_il" />
                    :<></>}
                    
                </div>
                <div className="mobileRow">
                    <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=12&l=ur1&category=amazon_kids&banner=16WDKKJSTTZ6KQGJWZ82&f=ifr&linkID=340881a1563125ecde172818cdc9ae77&t=inventory0f-21&tracking_id=inventory0f-21" width="300" height="300" scrolling="no" border="0" marginwidth="0" frameborder="0"></iframe>
                    {!tabView?
                        <AdProduct title="Tommy Hilfiger Leather Wallet" price={28.20} rating={5} sale={0}  BasketInfo="Add to Basket"
                        image="https://res.cloudinary.com/dlbm3b0oh/image/upload/v1617861312/ProductImages/Tommy_Hilfiger_Leather_RFID_Extra_Capacity_Trifold_Wallet_eqtlnm.png"
                        connection="https://www.amazon.co.uk/gp/product/B07L3M5H1F?ie=UTF8&linkCode=li2&tag=inventory0f-21&linkId=9be14d1c340da96e437a53646ba7ea4f&ref_=as_li_ss_il" />
                    :<></>}
                    
                </div>
                </>
            )}
        </div>
    )
}

export default Home
