import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import About from './components/About';
import Visualization from './components/Visualization';
import Navbar from './components/Navbar';
import { isAuthenticated } from './config/auth';
import './App.css';

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <>
                                    <Navbar />
                                    <Chat />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/chat"
                        element={
                            <PrivateRoute>
                                <>
                                    <Navbar />
                                    <Chat />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PrivateRoute>
                                <>
                                    <Navbar />
                                    <About />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/visualization"
                        element={
                            <PrivateRoute>
                                <Visualization />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
