import { useEffect,useState } from "react";
import {Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import Checkout from "./Component/Checkout"
import Payment from "./Component/Payment"
import Login from "./Component/Login";
import Gadgets from "./Component/Gadgets";
import { useDispatch } from "react-redux";
import { addUser } from "./StateManagment/actions";
import { auth } from "./firebase";
import { useSelector } from "react-redux";

function App() {
  let Basket = useSelector(state=> state.basketReducer);
  let User = useSelector(state=> state.userReducer.user);  
  const [mobileView, setmobileView] = useState(false);
  const dispatch = useDispatch();

  const viewType= ()=>{
    if(window.outerWidth<=900 || window.innerWidth<=900){
        setmobileView(true);
    }else if(window.outerWidth>900 || window.innerWidth>900){
      setmobileView(false);
    }
  }
  
  useEffect(() => {
    // Changes on screen size
    viewType();
    // Changes when user login/logout 
    auth?.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch(addUser(authUser));  
      }else{
        dispatch(addUser(null));
      }
    })
  }, [])
  window.addEventListener('resize',viewType);

  return (
    <div className="App">
        <Router>
          <div className="App">
              <Switch>
                {/* Checkout page */}
                <Route path="/login">
                    <Login />
                </Route>
                {/* Checkout page */}
                <Route path="/gadgets">
                    <Header mobileView={mobileView}/>
                    <Gadgets mobileView={mobileView}/>
                </Route>
                {/* Checkout page */}
                <Route path="/checkout">
                    <Header mobileView={mobileView}/>
                    <Checkout mobileView={mobileView}/>
                </Route>
                {/* Payment page */}
                <Route path="/payment" render = {() => (User && Basket.basket.length>0?  (
                      <>
                        <Header mobileView={mobileView}/>
                        <Payment mobileView={mobileView}/>
                      </>
                    ) : (
                      <Redirect to="/" />
                    ))}
                  />
                <Route path="/payment">
                    <Header mobileView={mobileView}/>
                    <Payment mobileView={mobileView}/>
                </Route>
                {/* "/" Route should be at last else it is going to navigate to this page always */}
                <Route path="/">
                  <Header mobileView={mobileView}/>
                  <Home mobileView={mobileView}/>
                </Route>
              </Switch>
          </div>
        </Router>  
    </div>
  );
}

export default App;
