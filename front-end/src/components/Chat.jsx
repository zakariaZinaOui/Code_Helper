import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGeminiResponse } from '../config/gemini';
import { isAuthenticated } from '../config/auth';
import Navbar from './Navbar';
import GitHubVisualization from './GitHubVisualization';
import GithubModal from './GithubModal';
import './Chat.css';

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showVisualization, setShowVisualization] = useState(false);
    const [githubData, setGithubData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    const handleReset = () => {
        if (window.confirm('Voulez-vous vraiment effacer toute la conversation ?')) {
            setMessages([]);
            setShowVisualization(false);
            setGithubData(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMessage = {
            role: 'user',
            content: message
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const response = await getGeminiResponse(message);
            const aiMessage = {
                role: 'assistant',
                content: response
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Erreur:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGithubAnalysis = async (githubUrl) => {
        if (!githubUrl.trim()) return;

        const userMessage = {
            role: 'user',
            content: `Analyse du dépôt GitHub : ${githubUrl}`
        };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const response = await getGeminiResponse(
                `Faire une analyse détaillée de ce dépôt GitHub et suggérer des améliorations : ${githubUrl}`
            );
            
            const aiMessage = {
                role: 'assistant',
                content: response
            };
            setMessages(prev => [...prev, aiMessage]);
            
            setGithubData({
                url: githubUrl,
            });
        } catch (error) {
            console.error('Erreur lors de l\'analyse GitHub:', error);
            const errorMessage = {
                role: 'assistant',
                content: "Désolé, une erreur s'est produite lors de l'analyse du dépôt GitHub."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            {!showVisualization ? (
                <div className="chat-page">
                    <div className="chat-container">
                        <div className="chat-header">
                            <button 
                                className="reset-button"
                                onClick={handleReset}
                                title="Réinitialiser la conversation"
                            >
                                Nouvelle conversation
                            </button>
                        </div>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.role}`}>
                                    {msg.content}
                                </div>
                            ))}
                            {isLoading && <div className="loading">En cours de traitement...</div>}
                        </div>
                        <div className="input-container">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Posez votre question..."
                                />
                                <button type="submit" disabled={isLoading}>
                                    Envoyer
                                </button>
                            </form>
                            <div className="github-controls">
                                <button 
                                    className="github-button"
                                    onClick={() => setIsModalOpen(true)}
                                    disabled={isLoading}
                                >
                                    Analyser GitHub
                                </button>
                                {githubData && (
                                    <button 
                                        className="visualize-button"
                                        onClick={() => setShowVisualization(true)}
                                    >
                                        Visualiser les statistiques
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="visualization-container">
                    <button 
                        className="back-to-chat"
                        onClick={() => setShowVisualization(false)}
                    >
                        ← Retour au chat
                    </button>
                    <GitHubVisualization githubData={githubData} />
                </div>
            )}

            <GithubModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleGithubAnalysis}
            />
        </>
    );
}

export default Chat; 