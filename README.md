# CodeHelper 1.0

CodeHelper 1.0 est une solution innovante conçue pour optimiser et simplifier les flux de travail des développeurs en automatisant des tâches courantes grâce à l'intelligence artificielle et une architecture de microservices robuste.

## Fonctionnalités principales

### 1. Génération de code automatisée

Grâce à une intégration avec l'API d'OpenAI, CodeHelper 1.0 peut générer du code source en fonction des spécifications fournies par les développeurs. Cela permet de gagner du temps lors du prototypage et du développement initial.

### 2. Correction et amélioration de code

Les développeurs peuvent soumettre des fragments de code pour correction ou amélioration. Le microservice dédié utilise l'IA pour fournir des suggestions détaillées et des corrections basées sur les meilleures pratiques.

### 3. Service de découverte (Eureka)

Un service de découverte centralisé permet à tous les microservices de communiquer efficacement entre eux et de s'adapter dynamiquement aux modifications dans l'infrastructure.

### 4. Passerelle API

Une passerelle API centralise les interactions entre les utilisateurs et les microservices, simplifiant l'authentification, la gestion des erreurs et les opérations d'acheminement.

## Architecture

### Backend

- **Technologie principale** : Spring Boot pour une architecture modulaire et évolutive.
- **Base de données** : MySQL pour chaque microservice afin d'assurer la persistance des données.

### Microservices indépendants

- **Gestion des utilisateurs** : Enregistrement et gestion des comptes utilisateurs.
- **Génération de code** : Production de code basé sur les spécifications des utilisateurs.
- **Correction de code** : Amélioration et révision des fragments de code soumis.
- **Service de découverte (Eureka)** : Enregistrement et découverte dynamique des microservices.
- **API Gateway (Zuul)** : Point d'entrée unique pour centraliser les appels aux microservices.

### Intégration avec OpenAI

- **Utilisation de l'API d'OpenAI** dans les microservices de génération et correction de code.
- **Gestion des appels** via la bibliothèque OkHttp pour assurer une communication fluide.

### Gestion des appels asynchrones

- Utilisation de OkHttp ou d'autres bibliothèques HTTP pour des performances optimales.

## Avantages pour les développeurs

- **Gain de temps** : Automatisation des tâches répétitives comme la génération de code ou les corrections.
- **Qualité du code** : Suggestions et corrections alignées sur les standards modernes.
- **Modularité** : Architecture en microservices facilitant la maintenance et l'extension.
- **Flexibilité** : Extensible pour intégrer d'autres services IA ou fonctionnalités futures.

## Architecture du projet

