import React from 'react';
import { Link } from 'react-router-dom';

const registered = () => {
	return(
			<div>
				<h1>Welcome User! You are now Registered!</h1>
				<Link to="/profiles">Profiles</Link>
			</div>
		) 
}

export default registered;