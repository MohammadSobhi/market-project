import React, { useState } from "react";
import { getAllUsers, createProduct, getMyProfile, editMyProfile, deleteMyProfile
    , getMyCart, addToCart, getProducts, getProductInfo, updateProductInfo, deleteProduct, rateProduct
    ,

 } from "../api";

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ username: "", password: "" });
    const [signupFormData, setSignupFormData] = useState({
        user_name: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        photo: '',
        address: '',
        cart_id: 0,
        role: 0,
        favorites: ''
      });
    const [isLogin, setIsLogin] = useState(true);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        console.log("Login Data:", loginFormData);
        const data = await rateProduct()
        console.log(data)
        
    }

    const handleSignupSubmit = async(e) =>{
        e.preventDefault();
        console.log("Signup Data:", signupFormData);
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "username": "aboda",
                "email": "string",
                "password": "string",
                "first_name": "string",
                "last_name": "string",
                "photo": "string",
                "address": "string",
                "cart_id": 0,
                "role": "string",
                "favorites": "string"
            })
            });
            const data = await response.json();
            console.log(data); // Handle the response accordingly
          } catch (error) {
            console.error(error);
          }
    }

    function handleLoginChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSignupChange(e) {
        const { name, value } = e.target;
        setSignupFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function toggleForm() {
        setIsLogin(prev => !prev);
    }

    return (
        
        <div className="login-container">
            {isLogin ? (
                <>
                    <h1>Sign in to your account</h1>
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        
                        <input
                            name="username"
                            onChange={handleLoginChange}
                            type="text"
                            placeholder="username"
                            value={loginFormData.username}
                        />
                        <input
                            name="password"
                            onChange={handleLoginChange}
                            type="password"
                            placeholder="Password"
                            value={loginFormData.password}
                        />
                        <button>Log in</button>
                    </form>
                    <p>
                        Don't have an account? <button onClick={toggleForm}>Sign up instead</button>
                    </p>
                </>
            ) : (
                
                    <div class="form-container">
        <div class="form-header">
            <img src="logo.png" alt="Logo" class="logo"></img>
            <h1>Hey There!</h1>
            <p>Let's get started with your <strong>30 days free trial ✨</strong></p>
            <p class="subtext">No credit card details required.</p>
        </div>
        <form action="/submit" method="post">
            <div class="form-row">
                <div class="form-group">
                    <label for="firstname">First Name *</label>
                    <input type="text" id="firstname" name="firstname" required></input>
                </div>
                <div class="form-group">
                    <label for="lastname">Last Name *</label>
                    <input type="text" id="lastname" name="lastname" required></input>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password *</label>
                    <input type="password" id="confirm-password" name="confirm-password" required></input>
                </div>
            </div>
            <div class="form-group">
                <input type="checkbox" id="updates" name="updates"></input>
                <label for="updates">I want to receive updates about beehiiv</label>
            </div>
            <button type="submit">Get Started</button>
        </form>
        <div class="form-footer">
            <p>Already have an account? <a href="#">Log In</a></p>
            <p>Trouble signing up? <a href="#">Talk with our Chatbot Assistant</a></p>
            <p>By signing up, I agree to beehiiv's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>
        </div>
    </div>
            )}
        </div>
    );
}
