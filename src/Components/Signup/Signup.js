import React, { useState } from "react";
import "../Login/Login.css";
import '../Signup/Signup.css'
import logo from '../Home/Nav/logo-main.svg'
import { Link } from "react-router-dom";

const Login = () => {
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
        <div className="login_form_container signup-container">
            <div className="login_form">
                <div className="login-header">
                    <div className="login-logo">
                        <img src={logo} alt="login-logo" />
                    </div>

                    <h2>Sign Up</h2>
                </div>
                <div className="signup-form">
                    <div className="input_group signup_input">
                        <i className={`fa fa-user ${iconClass}`}></i>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="input_text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="input_group signup_input">
                        <i className={`fa fa-user ${iconClass}`}></i>
                        <input
                            type="text"
                            placeholder="Enter Lastname"
                            className="input_text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="input_group signup_input">
                        <i className={`fa fa-user ${iconClass}`}></i>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input_text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="input_group signup_input">
                        <i className={`fa fa-user ${iconClass}`}></i>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="input_text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="input_group signup_input">
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
                    <div className="input_group signup_input">
                        <i className={`fa fa-unlock-alt ${iconClass}`}></i>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input_text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                    </div>
                    <div className="input_group signup_input_zip">
                        <i className={`fa fa-unlock-alt ${iconClass}`}></i>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            className="input_text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                    </div>
                </div>
                <p className="terms"><input type="checkbox" /> I agree with the<Link to=""> Privacy Policy</Link></p>
                <div className="button_group signup-btn" id="login_button">
                    <Link>Submit</Link>
                </div>
                <div className="direct-to-signup">
                    <p>Existing User?<span><Link to=""> Log In</Link></span></p>
                </div>
                <div className="fotter">
                    <span>Or Sign In With</span>
                </div>
                <div className="signup-agent-btn" id="login_button">
                    <Link>Agent Sign up</Link>
                </div>
               
            </div>
        </div>
    );
}

export default Login;

