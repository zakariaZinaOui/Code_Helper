import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../config/auth';
import PasswordInput from './PasswordInput';
import './Auth.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/');
        } else {
            setError('Email ou mot de passe incorrect');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="app-logo">
                    <img src="/favicon.svg" alt="logo" className="auth-logo" />
                    <div className="app-name">CodeHelper AI</div>
                </div>
                <h2>Connexion</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="auth-input"
                        />
                    </div>
                    <div className="form-group">
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                        />
                    </div>
                    <button type="submit" className="auth-button">Se connecter</button>
                    <div className="create-account">
                        Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login; 