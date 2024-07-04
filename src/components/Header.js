import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //Subscribing to the store uisng a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="w-56" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus? "✔" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout")
                        : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                    <li className="px-4 font-semibold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;




//Selector is nothing but a hook inside REACT.
//useSelector hook will give us the access to the store.
//useSelector helps us to identify what portion of our store we need to read