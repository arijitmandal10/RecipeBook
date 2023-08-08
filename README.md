
# Cookbook Web App

![Screenshot (36)](https://github.com/arijitmandal10/RecipeBook/assets/114182784/eef7d72f-4a6e-4204-bf74-73769634ad9f)

Cookbook is a web application built with React and React Router DOM that allows users to explore and search for recipes.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Libraries and Hooks](#libraries-and-hooks)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [License](#license)

## Features

- Browse a collection of delicious recipes.
- Search for recipes using keywords.
- View detailed information about a specific recipe.
- Responsive design for various screen sizes.

## Folder Structure

```
public/
src/
|-- components/
|   |-- Body.jsx
|   |-- Error.jsx
|   |-- Navbar.jsx
|   |-- Recipe.jsx
|   |-- Search.jsx
|-- pages/
|   |-- Details.jsx
|   |-- SearchPage.jsx
|-- utils/
|   |-- useRecipes.js
|-- App.js
|-- index.css
|-- index.js
.gitignore
README.md
package-lock.json
package.json
```

## Tech Stack

- React
- React Router Dom

## Libraries and Hooks

- [react-router-dom](https://reactrouter.com/web/guides/quick-start): For handling client-side routing.
- [useState](https://reactjs.org/docs/hooks-state.html) and [useEffect](https://reactjs.org/docs/hooks-effect.html): React hooks for managing state and side effects.
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): For making API requests to retrieve recipe data.

## Screenshots
![image](https://github.com/arijitmandal10/RecipeBook/assets/114182784/aa517e11-ef96-4de4-b8ce-4c72d8fc9db7)



## Deployment

The app has been deployed using Netlify. You can access it [here](https://cookbook-arijit.netlify.app/).

## Getting Started

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Run the development server using `npm start`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
