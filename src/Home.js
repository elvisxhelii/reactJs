import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	


	render() {
		return(
			<div>
				<div>
					<h1>Welcome to REACT!</h1>
				</div>
				<img 
				src={logo} 
				alt="logo" 
				/>
			</div>
		);
	}
}

export default Home;