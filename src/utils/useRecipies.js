import { useEffect, useState } from 'react';

export const useRecipies = () => {
	const [recipes, setRecipes] = useState([]);

	const getRecipes = async () => {
		const check = localStorage.getItem('recipes');
		if (check) {
			setRecipes(JSON.parse(check));
		} else {
			const json = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=3f487b299b1146aca8b4a17f13b2c2d6&number=20`);
			const data = await json.json();

			localStorage.setItem('recipes', JSON.stringify(data.recipes));
			setRecipes(data.recipes);
		}
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return recipes;
};
