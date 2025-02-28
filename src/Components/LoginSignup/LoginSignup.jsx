import React, { useState } from "react";
import './LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState('login'); // Kezdeti állapot: login
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const registerLink = () => {
        setAction('register');  // Regisztrációs form aktívvá tétele
    };

    const loginLink = () => {
        setAction('login');  // Bejelentkezési form aktívvá tétele
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        setSuccessMessage("Registration successful! Redirecting to the website...");

        setTimeout(() => {
            window.location.href = "Web.html";
        }, 2000);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        // Előzőleg regisztrált adatok beolvasása a localStorage-ból
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            setSuccessMessage("Login successful! Redirecting...");
            setErrorMessage("");

            setTimeout(() => {
                window.location.href = "Web.html";
            }, 2000);
        } else {
            setErrorMessage("Invalid username or password!");
        }
    };

    return (
        <div className={`wrapper ${action}`}>
            {/* Bejelentkezési forma */}
            <div className={`form-box login ${action === 'login' ? 'show' : ''}`}>
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>

                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required />
                    </div>
                    <br />
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            {/* Regisztrációs forma */}
            <div className={`form-box register ${action === 'register' ? 'show' : ''}`}>
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>

                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password again" placeholder="Password again" required />
                    </div>
                    <label class="checkbox-container">
                    <input type="checkbox" required />
                    <p id="terms">I agree to the terms & conditions</p>
                    </label>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>

                {successMessage && (
                    <div className="success-message">
                        <p>{successMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;
