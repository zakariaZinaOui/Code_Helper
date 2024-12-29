// Stockage des utilisateurs dans le localStorage
const STORAGE_KEY = 'users';

// Initialisation avec l'admin par défaut
const initializeUsers = () => {
    const existingUsers = localStorage.getItem(STORAGE_KEY);
    if (!existingUsers) {
        const defaultAdmin = {
            email: 'Admin@gmail.com',
            password: 'Emsiadmin'
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify([defaultAdmin]));
    }
};

// Initialiser les utilisateurs au démarrage
initializeUsers();

export const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    // Vérifier si l'email existe déjà
    if (users.some(user => user.email === email)) {
        return false;
    }

    // Ajouter le nouvel utilisateur
    users.push({ email, password });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return true;
};

export const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
};

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};