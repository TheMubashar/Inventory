import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import "./login.css"

function Login() {
    // useHistory hep us to change the url programmically
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e=>{
        e.preventDefault();
        // Firebase stuff
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }
    const register =(e)=>{
        e.preventDefault();
        // Firebase stuff
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                auth.user.sendEmailVerification().then(()=>{
                    console.log("Success!")
                }).catch(error => alert(error.message));
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <h1 className="nameLogo">INVENTORY</h1>
            </Link>    
                <form className="loginForm">
                    <h2>Sign In</h2>
                    <label>Email </label>
                    <input className="email" type="text" value={email} onChange={e=>setemail(e.target.value)} placeholder=" Email" required="required"/>
                    <label>Password </label>
                    <input className="password" type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder=" Password" required="required"/>
                    <p>
                        By signing-in you agreed to the Terms and Conditions of INVENTORY. Please visit our policy notice, our Cookies noties and our Interset-Based Ads network
                    </p>
                    <button className="signInBtn" type="submit" onClick={signIn}>Sign In</button>
                    <button className="createAccountBtn" type="submit" onClick={register}>Create your Inventory Account</button>
                </form>
        </div>
    )
}

export default Login
