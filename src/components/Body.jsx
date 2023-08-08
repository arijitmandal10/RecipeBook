import React from 'react';
import { useRecipies } from '../utils/useRecipies';
import Recipe from './Recipe';
import Search from './Search';
import { Link } from 'react-router-dom';

const Body = () => {
	const recipes = useRecipies();
	console.log(recipes);

	return (
		<div className='container'>
			<Search />
			<div className='Body'>
				{recipes.map((recipe) => (
					<Link to={'/details/' + recipe.id}>
						<Recipe {...recipe} key={recipe.id} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
