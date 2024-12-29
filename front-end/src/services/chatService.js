const API_URL = 'https://api.openai.com/v1/chat/completions';

export const fetchChat = async() => {
    return [];
};

export const optimize = async(input) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                        role: "system",
                        content: "You are a helpful assistant that helps optimize code."
                    },
                    {
                        role: "user",
                        content: input.code
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return {
            code: data.choices[0].message.content,
            isInput: false
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            code: "Désolé, une erreur s'est produite. Veuillez réessayer.",
            isInput: false
        };
    }
};

export const getGeminiResponse = async(message) => {
    // Simuler une réponse de l'API
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (message.includes('github.com')) {
        return `Analyse du dépôt GitHub :

Structure du projet :
- Le projet est bien organisé avec une séparation claire des composants
- Les fichiers sont regroupés de manière logique par fonctionnalité

Bonnes pratiques :
- Utilisation cohérente des conventions de nommage
- Documentation claire du code
- Tests unitaires présents

Points d'amélioration suggérés :
- Ajouter plus de commentaires dans le code
- Optimiser certaines performances
- Renforcer la couverture des tests

Score global : 85/100`;
    }

    return "Je suis désolé, je ne peux pas traiter cette demande pour le moment. Veuillez réessayer plus tard.";
};