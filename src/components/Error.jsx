import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<h1 style={{ marginTop: '10%', textAlign: 'center' }}>Oops!! page not found☹️</h1>
			<h1 style={{ textAlign: 'center', fontSize: 'xx-large', textDecoration: 'auto' }}>
				{' '}
				<Link to='/'>🔙</Link>
			</h1>
		</div>
	);
};

export default Error;
