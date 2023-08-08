import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate('/searchpage/' + search);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={search} placeholder='search query' onChange={(e) => setSearch(e.target.value)} />
		</form>
	);
};

export default Search;
