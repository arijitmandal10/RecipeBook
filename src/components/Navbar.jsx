import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav>
			<h3>
				<Link to='../'> 🔙</Link>{' '}
			</h3>
			<h2>
				<Link to='/'>CookBook🧑‍🍳📖</Link>
			</h2>
			<p></p>
		</nav>
	);
};

export default Navbar;
