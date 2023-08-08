import React from 'react';

const RecipeDetails = ({ title, image, instructions, extendedIngredients, summary }) => {
	// const { original } = extendedIngredients;
	const createMarkup = () => {
		return { __html: summary };
	};
	const createMarkup2 = () => {
		return { __html: instructions };
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<div className='details'>
				<div className='RecipeDetails'>
					<img src={image} alt='' />
					<div className='bottom'>
						<details>
							<summary>INGREDIENTS</summary>
							<p>something</p>
						</details>
						<details>
							<summary>INSTRUCTIONS</summary>
							<p dangerouslySetInnerHTML={createMarkup2()} />{' '}
						</details>
					</div>
				</div>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</>
	);
};

export default RecipeDetails;
