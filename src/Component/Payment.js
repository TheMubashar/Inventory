import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
// import Email_Address  from "./Email&Address"
import Order  from "./OrderConfirmation"
import { firebaseAnalytics } from '../firebase'
import "./payment.css"

function Payment() {
    useEffect(()=>{
        firebaseAnalytics.logEvent("Payment_visited");
    })
    const [name, setname] = useState(null);
    const [address, setaddress] = useState(null);
    const [mobileNumber, setmobileNumber] = useState(null);
    const [containerValue, setcontainerValue] = useState(null);
    const [formValidated, setformValidated] = useState(false);
    let User = useSelector(state=> state.userReducer.user);
    
    const verifyEmail =(event)=>{
        event.preventDefault();
        User.sendEmailVerification().then(()=>{
            alert("Kindly verify your email");
        }).catch(error => alert(error.message));   
    }
    console.log(containerValue);
    const NextContainer =(event)=>{
        event.preventDefault();
        if(!formValidated){
            setformValidated(true)
            setcontainerValue("Order")
            formSubmission()
        }else if(containerValue==="Order"){
            setcontainerValue("Payment");
        }
    }
    const BackContainer =(event)=>{
        event.preventDefault();
        if(containerValue==="Order"){
            setformValidated(false)
            setcontainerValue(null)
        }else if(containerValue==="Payment"){
            setcontainerValue("Order");
        }
    }
    const formSubmission =()=>{
        if(User.displayName===null & User.phoneNumber)
        // update user profile
        User.updateProfile({
            displayName: name,
            phoneNumber: mobileNumber
        }).then(()=>{
            console.log("Changed done!")
        }).catch(error => alert(error.message));
    }
    const Container=({Value})=>{
        switch (containerValue) {
            case "Order":
                return <Order/>
                break;
            case "Payment":
                return false
                break;
            default:
                return false;
                break;
        }
    }
    return (
        <div className="payment">
            <div className="divNumber">
                <h3>Address</h3>
                <h3>Order Confirmation</h3>
                <h3>Payment</h3>
            </div>

            <div className="amazonPrimeBannar">
                <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=amazon_music_bounty&banner=109BMKGXT71DZBKFBZR2&f=ifr&linkID=61294ccd77f83337ff8922e82a7da58e&t=inventory0f-21&tracking_id=inventory0f-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" frameborder="0"></iframe>
            </div>

            <Container Value={containerValue} />

            <div className="Btns">
                {containerValue?
                    <button className="prevBtn" onClick={BackContainer}>Back</button>
                :<></>}
                {containerValue==="Payment"?
                    <button className="submmitBtn" onClick={formSubmission}>Submit</button>
                :containerValue==="Order"?(
                    <button className="nextBtn" onClick={NextContainer}>Next</button>
                ):(<></>)}
            </div>

            {/* Address Container */}
            {!formValidated?
                <div className="emailAndAddress">
                    <form className="addressForm" onSubmit={NextContainer}>
                        {User.displayName?(
                            <label>{User.displayName}</label>
                        ):(
                            <input className="name" type="text" required="required" value={name} 
                            onChange={e=>setname(e.target.value)} 
                            placeholder={!User.displayName? "Your Name":User.displayName} 
                            />
                        )}
                        
                        <input className="phone" type="text" required="required" value={mobileNumber} 
                            onChange={e=>setmobileNumber(e.target.value)} 
                            placeholder={!User.displayName? "Phone Number":User.phoneNumber} 
                            />
                        <input className="address" type="text" required="required" value={address} 
                            onChange={e=>setaddress(e.target.value)} 
                            placeholder={!User.displayName? "Your Address":User.displayName} 
                            />
                        <label>{User.email}</label>
                        {!User.emailVerified?(
                            <button className="verificationBtn" onClick={verifyEmail}>Send Verification Email</button>
                            ):(<></>)}
                        
                        <button className="nextBtn" type="submit">Next</button>
                    </form>
                </div>
            :<></>}
        </div>
    )
}

export default Payment
