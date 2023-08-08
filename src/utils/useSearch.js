import { useEffect, useState } from 'react';

export const useSearch = () => {
	const [searchRecipes, setsearchRecipes] = useState([]);

	const getsearchRecipes = async (query) => {
		const json = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=14174f4bea1547efa7b315833e22ffd2&number=10`);
		const data = await json.json();

		setsearchRecipes(data.recipes);
	};

	useEffect(() => {
		getsearchRecipes();
	}, []);

	return searchRecipes;
};
