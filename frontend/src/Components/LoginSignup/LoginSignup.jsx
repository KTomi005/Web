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
        console.log("Register form submitted");
    
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordAgain = e.target["password again"].value;
    
        // Ellenőrizni kell, hogy a két jelszó megegyezik-e
        if (password !== passwordAgain) {
            setErrorMessage("Passwords do not match!");
            return;
        }
    
        // Adatok küldése a backendnek
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
        .then(response => response.json())
.then(data => {
    console.log("Backend response:", data); // Itt megnézzük mit küld vissza a szerver
    if (data.message === "User successfully created!") {
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
            window.location.href = "Web.html";
        }, 2000);
    } else {
        setErrorMessage(`Registration failed! Server says: ${data.message}`);
    }
})
.catch((error) => {
    console.error('Error during registration:', error);
    setErrorMessage("Error during registration.");
});
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        const username = e.target.username.value;
        const password = e.target.password.value;
    
        // Kérjük a backendtől, hogy ellenőrizze a felhasználót
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Logoljuk a választ
            if (data.message === "Login successful!") {
                setSuccessMessage("Login successful! Redirecting...");
                setTimeout(() => {
                    window.location.href = "Web.html";  // Itt történik az átirányítás
                }, 2000);
            } else {
                setErrorMessage("Invalid username or password!");
            }
        })
        .catch((error) => {
            setErrorMessage("Error during login.");
        });
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
                        <input type="password" name="password" placeholder="Password" required />
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

                    <label className="checkbox-container">
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
