import React from "react";
import "./App.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ShipppingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";

import logo from "./Images/logo.png";

function App() {
    // Add this in node_modules/react-dom/index.js
window.React1 = require('react');

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const openmenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };
    const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openmenu}>&#9776;</button>
                        <Link to="/">
                            Origami
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="header-links">
                        <span>
                            <Link to="/cart">
                                <span className="material-icons">
                                    shopping_cart
                                </span>
                            </Link>
                        </span>
                        <span>
                            {userInfo ? (
                                <Link to="/profile">{userInfo.name}</Link>
                            ) : (
                                <Link to="/signin">
                                    <span className="material-icons">login</span>
                                </Link>
                            )}
                        </span>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Categories</h3>
                    <button
                        className="sidebar-close-button"
                        onClick={closemenu}
                    >
                        <span className="material-icons">arrow_back_ios</span>
                    </button>
                    <ul>
                        <li>
                            <a href="index.html">Mens</a>
                        </li>
                        <li>
                            <a href="index.html">Women</a>
                        </li>
                        <li>
                            <a href="index.html">Unisex</a>
                        </li>
                        <li>
                            <a href="index.html">Children</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/products" component={ProductsScreen} />
                        <Route path="/shipping" component={ShipppingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route
                            path="/placeorder"
                            component={PlaceOrderScreen}
                        />
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                    </div>
                </main>
                <footer className="footer">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
