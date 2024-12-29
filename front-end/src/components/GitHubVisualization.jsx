import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import './GitHubVisualization.css';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale, 
    LinearScale, 
    BarElement,
    PointElement,
    LineElement,
    Title
);

function GitHubVisualization({ githubData }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (githubData) {
            try {
                // Simulation des données pour la démonstration
                const processedStats = {
                    languages: {
                        labels: ['JavaScript', 'Python', 'Java', 'TypeScript', 'CSS', 'HTML'],
                        data: [40, 25, 15, 10, 5, 5],
                    },
                    commits: {
                        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                        data: [10, 15, 8, 12, 20, 5, 3],
                    },
                    contributors: {
                        labels: ['User1', 'User2', 'User3', 'User4'],
                        data: [120, 80, 45, 25],
                    },
                    activity: {
                        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
                        data: [50, 65, 45, 80, 95, 70],
                    },
                    codeQuality: {
                        labels: ['Tests', 'Documentation', 'Code Review', 'CI/CD'],
                        data: [85, 70, 90, 75],
                    }
                };
                setStats(processedStats);
                setLoading(false);
            } catch (err) {
                setError("Erreur lors du traitement des données GitHub");
                setLoading(false);
            }
        }
    }, [githubData]);

    if (loading) return <div className="github-viz-loading">Chargement des visualisations...</div>;
    if (error) return <div className="github-viz-error">{error}</div>;
    if (!stats) return null;

    const languagesData = {
        labels: stats.languages.labels,
        datasets: [{
            data: stats.languages.data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ]
        }]
    };

    const commitsData = {
        labels: stats.commits.labels,
        datasets: [{
            label: 'Commits par jour',
            data: stats.commits.data,
            backgroundColor: '#36A2EB'
        }]
    };

    const contributorsData = {
        labels: stats.contributors.labels,
        datasets: [{
            label: 'Contributions par développeur',
            data: stats.contributors.data,
            backgroundColor: '#FF6384'
        }]
    };

    const activityData = {
        labels: stats.activity.labels,
        datasets: [{
            label: 'Activité du projet',
            data: stats.activity.data,
            borderColor: '#4BC0C0',
            tension: 0.4,
            fill: false
        }]
    };

    const codeQualityData = {
        labels: stats.codeQuality.labels,
        datasets: [{
            label: 'Métriques de qualité (%)',
            data: stats.codeQuality.data,
            backgroundColor: '#FFCE56'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'white' }
            },
            title: {
                display: true,
                color: 'white'
            }
        },
        scales: {
            y: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        }
    };

    return (
        <div className="github-visualization">
            <h2>Analyse détaillée du projet GitHub</h2>
            <div className="stats-overview">
                <div className="stat-card">
                    <h3>Statistiques générales</h3>
                    <ul>
                        <li>Nombre total de commits: 280</li>
                        <li>Branches actives: 5</li>
                        <li>Pull requests: 45</li>
                        <li>Issues ouvertes: 12</li>
                    </ul>
                </div>
            </div>
            <div className="charts-container">
                <div className="chart-box">
                    <h3>Distribution des langages</h3>
                    <Pie data={languagesData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Activité des commits</h3>
                    <Bar data={commitsData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Contributions par développeur</h3>
                    <Bar data={contributorsData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Activité du projet</h3>
                    <Line data={activityData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Métriques de qualité</h3>
                    <Bar data={codeQualityData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default GitHubVisualization; 