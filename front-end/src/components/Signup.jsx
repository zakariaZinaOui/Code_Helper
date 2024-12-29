import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../config/auth';
import PasswordInput from './PasswordInput';
import './Auth.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        if (signup(email, password)) {
            navigate('/login');
        } else {
            setError('Cet email est déjà utilisé');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="app-logo">
                    <img src="/favicon.svg" alt="logo" className="auth-logo" />
                    <div className="app-name">CodeHelper AI</div>
                </div>
                <h2>Créer un compte</h2>
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
                    <div className="form-group">
                        <PasswordInput
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirmer le mot de passe"
                        />
                    </div>
                    <button type="submit" className="auth-button">S'inscrire</button>
                    <div className="create-account">
                        Déjà un compte ? <Link to="/login">Se connecter</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup; 