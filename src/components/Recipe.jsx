import React from 'react';

const Recipe = ({ title, image, diets, summary }) => {
	const createMarkup = () => {
		return { __html: summary };
	};

	return (
		<div className='Recipe'>
			<img src={image} alt='' />
			<details>
				<summary>{title}</summary>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</details>
			<p>{diets.join(', ')}</p>
		</div>
	);
};

export default Recipe;
