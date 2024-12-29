import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../config/auth';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/favicon.svg" alt="logo" className="navbar-logo" />
                <Link to="/">CodeHelper AI</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Assistant</Link>
                <Link to="/about" className="nav-link">À propos</Link>
                {isAuthenticated() ? (
                    <button onClick={handleLogout} className="nav-link logout-btn">
                        Déconnexion
                    </button>
                ) : (
                    <Link to="/login" className="nav-link login-btn">
                        Connexion
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar; 