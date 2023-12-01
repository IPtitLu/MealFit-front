# MealFit Front-End

MealFit Front-End est l'interface utilisateur de MealFit, une application interactive qui vise à fournir des plans de repas personnalisés et adaptés à vos objectifs de santé et de fitness.

## Démarrage rapide

Pour obtenir une copie locale en cours d'exécution pour le développement et les tests, suivez ces instructions.

### Prérequis

- Assurez-vous d'avoir [Node.js](https://nodejs.org/en/download/) et npm installés.
- Un environnement de développement pour Vue.js est également nécessaire. Consultez [Vue CLI](https://cli.vuejs.org/guide/installation.html) pour l'installation si vous ne l'avez pas déjà.

### Installation

1. Clonez le dépôt :

    ```sh
    git clone https://github.com/votreusername/meal-fit-front.git
    cd meal-fit-front
    ```

2. Installez les dépendances du projet avec npm :

    ```sh
    npm install
    ```

3. Lancez le serveur de développement :

    ```sh
    npm run dev
    ```
Ceci démarrera un serveur de développement local. Ouvrez votre navigateur et visitez `http://localhost:5173` pour voir l'application en action.

## Structure 
- ``vite.config.ts``: This is the configuration file for Vite, a build tool that significantly improves the development experience.
- ``postcss.config.js`` and tailwind.config.ts: These files are used for configuring PostCSS and Tailwind CSS, respectively.

## Source Directory (src/)
- ``App.vue``: This is the main Vue component that acts as the root of your app.
- ``main.ts``: This is the entry point of your application where the Vue instance is created and mounted to the DOM.
- ``router/index.ts``: This file is used for defining the routes of your application.

## Components Directory (src/components/)

This directory contains all the Vue components used in your application. Each component has its own Vue file (.vue), which includes its template, script, and style.

- ``icons/``: This directory contains Vue components for different icons used in your application.

## Views Directory (src/views/)
This directory typically contains Vue components that act as pages in your application. These components are often associated with routes defined in ``src/router/index.ts``.

``Home.vue``: This is likely the home page of your application.
Assets Directory (src/assets/)
This directory is used to store static assets like images and stylesheets.

``main.css``: The main stylesheet for your application.
### Auteurs

- **Lucas Perez**
- **Bertyn Boulikou**
- **Valentin Bouet**
- **Douglas Barlow**

Ces contributeurs ont apporté leur passion et leur expertise à l'élaboration de MealFit.
