import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchRecipe from '../components/SearchRecipe';
import Search from '../components/Search';

const SearchPage = () => {
	const [searchRecipes, setsearchRecipes] = useState([]);
	const params = useParams();

	const getsearch = async (name) => {
		const json = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3f487b299b1146aca8b4a17f13b2c2d6&query=${name}`);
		const data = await json.json();

		setsearchRecipes(data.results);
	};

	useEffect(() => {
		getsearch(params.search);
	}, [params.search]);
	console.log(searchRecipes);

	return searchRecipes.length === 0 ? (
		<h3>there is no recipe related to your search</h3>
	) : (
		<div className='container'>
			<Search />
			<h4>related to: {params.search}</h4>

			<div className='Body'>
				{searchRecipes.map((recipe) => (
					<Link to={'/details/' + recipe.id}>
						<SearchRecipe {...recipe} key={recipe.id} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default SearchPage;
