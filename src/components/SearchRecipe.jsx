import React from 'react';

const SearchRecipe = ({ title, image }) => {
	return (
		<div className='Recipe'>
			<img src={image} alt='' />
			<h3>{title}</h3>
		</div>
	);
};

export default SearchRecipe;
