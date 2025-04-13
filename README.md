# CodeHelper 1.0

CodeHelper AI(1.0) est une plateforme innovante créée pour accompagner les développeurs dans leurs défis quotidiens de programmation et pour simplifier leurs flux de travail. Que vous soyez débutant ou expert, notre solution repose sur une intelligence artificielle puissante , une architecture de microservices robust et un support multilingue, vous permettant de travailler plus efficacement et de résoudre vos problèmes de code rapidement.



![codehelper](https://github.com/user-attachments/assets/6281f67d-8f0f-424d-8748-7a1b883b10aa)
![codehelper](https://github.com/user-attachments/assets/b297ca5d-7c4d-4c7e-9bd3-ca192a540963)
![AnalyseGit](https://github.com/user-attachments/assets/99883b6e-0e27-4144-b989-2499b26c05a8)



## Fonctionnalités principales  

### 1. Génération de code automatisée  
CodeHelper AI (1.0) intègre l'API Gemini pour générer du code source en fonction des spécifications fournies par les développeurs.  
- **Avantage** : Cette fonctionnalité accélère le prototypage et facilite les phases initiales de développement.  

### 2. Correction et amélioration de code  
Les développeurs peuvent soumettre des fragments de code à analyser.  
- **Fonctionnalité** : Le microservice dédié utilise l'intelligence artificielle pour proposer des corrections et des améliorations alignées sur les meilleures pratiques.  
- **Bénéfice** : Optimisation de la lisibilité et de la performance du code.  

### 3. Analyse de dépôt GitHub et propositions d'améliorations  
Connectez votre dépôt GitHub pour une analyse complète de vos projets.  
- **Points forts identifiés** : Bonnes pratiques appliquées et code optimisé.  
- **Points faibles détectés** : Complexité cyclomatique élevée, duplication de code, ou documentation insuffisante.  
- **Propositions d'amélioration** :  
  - Restructuration du code.  
  - Recommandations sur les tests unitaires.  
  - Meilleures pratiques pour la sécurité ,la documentation et la performance.  
- **Visualisation et analyse détaillée du projet GitHub** Pour obtenir une vue détaillée de votre projet:
    - Distribution des langages: Un graphique circulaire montrant le pourcentage de chaque langage utilisé dans le dépôt.
    - Nombre de commits : Un graphique de ligne montrant l'évolution du nombre de commits au fil du temps, ce qui peut indiquer l'activité de développement.
- Branches ouvertes : Une liste  montrant le nombre de branches ouvertes par rapport aux branches fusionnées, ce qui peut aider à évaluer la gestion des versions.

### 4. Service de découverte dynamique (Eureka)  
Un service de découverte centralisé permet une communication fluide entre tous les microservices.  
- **Avantage** : Adaptation dynamique aux modifications dans l'infrastructure, garantissant robustesse et flexibilité.  

### 5. Passerelle API centralisée  
La passerelle API simplifie et sécurise les interactions entre les utilisateurs et les microservices.  
- **Fonctionnalités principales** :  
  - Authentification.  
  - Gestion des erreurs.  
  - Acheminement des requêtes.


## Avantages pour les développeurs

- **Gain de temps** : Automatisation des tâches répétitives comme la génération de code ou les corrections.
- **Qualité du code** : Suggestions et corrections alignées sur les standards modernes.
- **Modularité** : Architecture en microservices facilitant la maintenance et l'extension.
- **Flexibilité** : Extensible pour intégrer d'autres services IA ou fonctionnalités futures.



## Architecture du project
![achitecture ACE](https://github.com/user-attachments/assets/53562ff9-9f06-4d73-8a6b-8441f161c806)


### Backend

- **Technologie principale** : Spring Boot pour une architecture modulaire et évolutive.
- **Base de données** : MySQL pour chaque microservice afin d'assurer la persistance des données.

### Frontend
- **React** : Utilisé pour construire une interface utilisateur dynamique et réactive. React permet de créer des composants réutilisables et de gérer l'état de l'application efficacement.

### Microservices indépendants

- **Gestion des utilisateurs** : Enregistrement et gestion des comptes utilisateurs.
- **Génération de code** : Production de code basé sur les spécifications des utilisateurs.
- **Correction de code** : Amélioration et révision des fragments de code soumis.
- **Service de découverte (Eureka)** : Enregistrement et découverte dynamique des microservices.
- **API Gateway (Zuul)** : Point d'entrée unique pour centraliser les appels aux microservices.


### Intégration avec les API externes :

- **API Gemini**:
Les microservices utilisent l'API Gemini pour la génération et la correction de code.
Feign Client : Facilitant la communication avec Gemini via des appels HTTP.
- **API GitHub** :
Intégrée pour accéder aux dépôts de code, récupérer les fichiers nécessaires, et gérer les interactions liées au versionnement.
Utilisée pour télécharger, lire ou contribuer aux projets directement depuis les microservices.

## Video Demonstration



https://github.com/user-attachments/assets/9ce4e936-2cc5-4f4c-a5d5-2d9905cfdddd



## Contributeurs

Ce projet a été développé avec la contribution de :
- [**Zakaria Zinaoui**](https://github.com/zakariaZinaOui)
- [**Salma Daigham**](https://github.com/salmasd5)
- [**Imane Tahri**](https://github.com/imanetahri123)
- [**Abdelghani Senhaji**](https://github.com/Senhaji22701)
- [**Nabil Hamdi**](https://github.com/NABILHAMDI24)
- [**Mohamed LACHGAR**](https://www.researchgate.net/profile/Mohamed-Lachgar) (ResearchGate)



