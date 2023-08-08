import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
	let params = useParams();
	const [details, setDetails] = useState({});

	const fetchDetails = async () => {
		try {
			const json = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=3f487b299b1146aca8b4a17f13b2c2d6`);
			const detailData = await json.json();
			setDetails(detailData);
		} catch (error) {
			console.error('Error fetching recipe details:', error);
		}
	};

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

	const createMarkup = () => {
		return { __html: details.summary };
	};

	const createMarkup2 = () => {
		return { __html: details.instructions };
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{details.title}</h1>
			<div className='details'>
				<div className='RecipeDetails'>
					<img src={details.image} alt='' />
					<div className='bottom'>
						{details.extendedIngredients && (
							<details>
								<summary>INGREDIENTS</summary>
								<p>
									<ul>
										{details.extendedIngredients.map((ingredient) => (
											<li key={ingredient.id}>{ingredient.original}</li>
										))}
									</ul>
								</p>
							</details>
						)}
						{details.instructions && (
							<details>
								<summary>INSTRUCTIONS</summary>
								<p dangerouslySetInnerHTML={createMarkup2()} />{' '}
							</details>
						)}
					</div>
				</div>
				{details.summary && <p dangerouslySetInnerHTML={createMarkup()} />}
			</div>
		</>
	);
};

export default Details;
