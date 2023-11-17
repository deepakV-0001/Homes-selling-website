import React, { useState } from "react";
import "../Login/Login.css";
import logo from '../Home/Nav/logo-main.svg'
import { Link } from "react-router-dom";

const Login=()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [iconClass, setIconClass] = useState("");

    const handleFocus = () => {
        setIconClass("glowIcon");
    };

    const handleBlur = () => {
        setIconClass("");
    };

    return (
        <div className="login_form_container">
            <div className="login_form">
                <div className="login-header">
                    <div className="login-logo">
                        <img src={logo} alt="login-logo" />
                    </div>

                    <h2>User Login</h2>
                </div>

                <div className="input_group">
                    <i className={`fa fa-user ${iconClass}`}></i>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input_text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="input_group">
                    <i className={`fa fa-unlock-alt ${iconClass}`}></i>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input_text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                   
                </div>
                <Link className="trouble-login" to="">Having trouble in sign in?</Link>
                <div className="button_group" id="login_button">
                    <Link>Submit</Link>
                </div>
                <div className="fotter">
                    <span>Or Sign In With</span>
                </div>
                <div className="direct-to-signup">
                <p>Don't have an account?<span><Link to=""> Request Now</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;

