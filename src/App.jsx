import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import KezdoLap from './KezdoLap/KezdoLap';
 
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<KezdoLap />} />
                <Route path="/signup" element={<LoginSignup />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/web.html" element={<h1>Web oldal</h1>} />  
            </Routes>
        </Router>
    );
}
 
export default App;