import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import './Visualization.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Visualization = () => {
    const navigate = useNavigate();

    // Exemple de données pour les graphiques
    const languagesData = {
        labels: ['JavaScript', 'Python', 'Java', 'TypeScript', 'C++'],
        datasets: [
            {
                data: [40, 25, 15, 12, 8],
                backgroundColor: [
                    '#F7DF1E',
                    '#3776AB',
                    '#007396',
                    '#3178C6',
                    '#00599C'
                ],
                borderWidth: 1
            }
        ]
    };

    const commitsData = {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [
            {
                label: 'Commits par jour',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: '#86c5d8',
                borderColor: '#86c5d8',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Statistiques du projet',
                color: 'white'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Langages utilisés',
                color: 'white'
            }
        }
    };

    return (
        <div className="visualization-page">
            <div className="visualization-container">
                <button className="back-button" onClick={() => navigate('/chat')}>
                    ← Retour au chat
                </button>
                <div className="charts-container">
                    <div className="chart-wrapper">
                        <Pie data={languagesData} options={pieOptions} />
                    </div>
                    <div className="chart-wrapper">
                        <Bar data={commitsData} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visualization; 