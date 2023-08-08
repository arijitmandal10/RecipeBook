import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

const Details = () => {
	let params = useParams();
	const [details, setDetails] = useState({});

	const fetchDetails = async () => {
		const json = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=3f487b299b1146aca8b4a17f13b2c2d6`);
		const detailData = await json.json();
		setDetails(detailData);
	};
	useEffect(() => {
		fetchDetails();
	}, [params.name]);
	console.log(details);

	return (
		<div>
			<RecipeDetails {...details} />
		</div>
	);
};

export default Details;
