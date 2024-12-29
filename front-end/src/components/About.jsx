import React from 'react';
import Navbar from './Navbar';
import './About.css';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <div className="about-container">
                    <div className="about-header">
                        <h1 className="about-title">À Propos de CodeHelper AI</h1>
                        <p className="about-subtitle">
                            Développé à des fins éducatives de programmation, conçu pour vous aider à résoudre vos défis de codage.
                        </p>
                    </div>

                    <div className="features-section">
                        <h2 className="features-title">Nos Fonctionnalités</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🤖</div>
                                <h3 className="feature-title">Assistant IA</h3>
                                <p className="feature-description">
                                    Une IA puissante pour répondre à vos questions de programmation
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3 className="feature-title">Support Multi-langages</h3>
                                <p className="feature-description">
                                    Support pour de nombreux langages de programmation
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">⏰</div>
                                <h3 className="feature-title">Disponible 24/7</h3>
                                <p className="feature-description">
                                    Une assistance disponible à tout moment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-section">
                        <h2 className="features-title">Contactez-nous</h2>
                        <div className="feature-card">
                            <p className="feature-description">
                                Pour toute question ou suggestion, n'hésitez pas à nous contacter :
                            </p>
                            <button className="contact-button">
                                Nous contacter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About; 