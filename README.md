# Carambar Front

Application web Angular pour afficher des blagues Carambar aléatoirement.

## Repositories

- **Frontend** : https://github.com/Hepsox/carambar_front
- **Backend** : https://github.com/Hepsox/carambar_back

## Description

Interface frontend qui consomme une API pour récupérer et afficher des blagues de type Carambar. L'utilisateur peut demander une nouvelle blague en cliquant sur un bouton.

## Fonctionnalités

- Affichage d'une blague aléatoire (question + réponse)
- Bouton pour charger une nouvelle blague
- Interface responsive

## Technologies

- Angular 20.0.0
- TypeScript
- RxJS
- Standalone components

## Prérequis

- Node.js
- Angular CLI
- API backend disponible sur `http://localhost:3000/blagues/random`

## Installation

```bash
npm install
```

## Développement

```bash
npm start
```

L'application sera accessible sur `http://localhost:4200/`.

## Build

```bash
npm run build
```



## Structure du projet

```
src/
├── app/
│   ├── pages/home/          # Page principale
│   ├── service/             # Services HTTP
│   ├── type/               # Interfaces TypeScript
│   └── app.config.ts       # Configuration de l'app
└── index.html
```

## API

L'application attend une API REST avec l'endpoint :
- `GET /blagues/random` : Retourne une blague aléatoire

Format de réponse attendu :
```json
{
  "id": 1,
  "question": "Que dit un escargot quand il croise une limace ?",
  "reponse": "Regarde le nudiste !",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```
