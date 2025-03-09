import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/KezdoLap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
                <div className="info-block col-md-3">
                <p>Welcome to our very first game project, Dungeon Explorer! We are thrilled to share this adventure with you, even though it's a work in progress. As a small, three-member team, we are still learning and improving with each step. Please keep in mind that the graphics might not be top-notch yet, and the game might not be as polished as bigger, more developed projects. But what we lack in visuals and perfection, we make up for with passion, creativity, and a desire to provide a fun and engaging experience.</p>
            </div>
        </div>
        </div>
    );
};
 
export default KezdoLap;
