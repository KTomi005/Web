import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KezdoLap.css';

const KezdoLap = () => {
    const navigate = useNavigate();
 
    return (
        <div className="kezdo-lap">
            <div className="topnav">
                <h1>Dungeon Explorer</h1>
                <button className="btn" onClick={() => navigate('/signup')}>Sign up</button>
                <button className="btn" onClick={() => navigate('/login')}>Login</button>
            </div>
            <br />
            <div className="Informational">
                <h3>Informational data</h3>
                <p>Welcome to our first game project. Its name is Dungeon Explorer. This is a graphically poor game. We are a three-membered group. So don't expect such a good game at first :)</p>
            </div>
        </div>
    );
};
 
export default KezdoLap;
