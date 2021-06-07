import React, { useState } from 'react'
import Cable from "./Gedgets/Cable"
import Desktop from "./Gedgets/Computer"
import Controller from "./Gedgets/Controller"
import ExternalDrive from "./Gedgets/External_Drive"
import Headphones from "./Gedgets/Headphones"
import Mouse from "./Gedgets/Mouse"
import Keyboard from "./Gedgets/Keyboard"
import Laptop from "./Gedgets/Laptop"
import Deals from "./Gedgets/Deals"
import "./subcategories.css"
import "./gadgets.css"

function Gadgets() {
    const [containerValue, setcontainerValue] = useState("Deals");
    const SubCategorySelected=(e)=>{
        e.preventDefault();
        setcontainerValue(e.target.value);
        console.log(e.target.value);
    }
    const SubCategoryActive=({Value})=>{
        switch (containerValue) {
            case "Cables":
                return <Cable />;
                break;
            case "Desktop":
                return <Desktop />;
                break;
            case "Controller":
                return <Controller />;
                break;
            case "External Drive":
                return <ExternalDrive />;
                break;
            case "Headphones":
                return <Headphones />;
                break;
            case "Mouse":
                return <Mouse />;
                break;
            case "Keyboard":
                return <Keyboard />;
                break;
            case "Laptop":
                return <Laptop />;
                break;
            default:
                return <Deals />;
                break;
        }
    }
    return (
        <div className="gadgets">
            {/* Sub Header */}
            <div className="Subcategories">
                <button value="Cables" onClick={SubCategorySelected}>Cables</button>
                <button value="Controller" onClick={SubCategorySelected}>Controller</button>
                <button value="Desktop" onClick={SubCategorySelected}>Desktop</button>
                <button value="External Drive" onClick={SubCategorySelected}>External Drive</button>
                <button value="Headphones" onClick={SubCategorySelected}>Headphones</button>
                <button value="Mouse" onClick={SubCategorySelected}>Mouse</button>
                <button value="Keyboard" onClick={SubCategorySelected}>Keyboard</button>
                <button value="Laptop" onClick={SubCategorySelected}>Laptop</button>
                <button value="Deals" onClick={SubCategorySelected}>Deals</button>
            </div>
            <iframe className="Ad" width="728" height="90" scrolling="no" border="0" marginwidth="0" frameborder="0" title="Ad Banner"
                src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=pcvideogames&banner=0ARHTTTPV6PH0V84N202&f=ifr&linkID=ccf3f97fe56b195afe5de0a880f76dcb&t=inventory0f-21&tracking_id=inventory0f-21" />
            {/* Body */}
            <SubCategoryActive Value={containerValue}/>
        </div>
    )
}

export default Gadgets
