import React, { useState } from 'react';
import './GithubModal.css';

function GithubModal({ isOpen, onClose, onSubmit }) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.trim()) {
            onSubmit(url);
            setUrl('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Analyse GitHub</h2>
                <p>Entrez l'URL du dépôt GitHub :</p>
                <div className="input-field">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://github.com/username/repository"
                        autoFocus
                    />
                </div>
                <div className="modal-buttons">
                    <button type="button" className="cancel-button" onClick={onClose}>
                        Annuler
                    </button>
                    <button type="button" className="submit-button" onClick={handleSubmit}>
                        Analyser
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GithubModal; 