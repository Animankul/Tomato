import axios from 'axios';
import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoredContext';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onChangeState = (newState) => {
        setState(newState);
        setData({
            name: newState === "Sign Up" ? "" : data.name,
            email: "",
            password: ""
        });
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
        let requestUrl = `${url}${endpoint}`;

        try {
            const response = await axios.post(requestUrl, data);

            // Log the response for debugging purposes
            console.log("Backend Response:", response.data);

            if (response.data && response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                alert(response.data.message || `${currState} successful!`);
                setShowLogin(false);
            } else {
                alert(response.data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error during login/register:", error);
            alert("Failed to process your request. Please check your inputs or try again later.");
        }
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Sign Up" && (
                            <input
                                name="name"
                                onChange={onChangeHandler}
                                value={data.name}
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            onChange={onChangeHandler}
                            value={data.email}
                            placeholder="Your email"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={onChangeHandler}
                            value={data.password}
                            placeholder="Password"
                            required
                        />
                        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                        <div className="login-popup-condition">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy</label>
                        </div>
                        {currState === "Login" ? (
                            <p>Create a new account? <span onClick={() => onChangeState("Sign Up")}>Click here</span></p>
                        ) : (
                            <p>Already have an account? <span onClick={() => onChangeState("Login")}>Login here</span></p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
