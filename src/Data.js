import React from 'react';
import Loading from './Loading';

class Data extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			person: null
		};
	}

	async componentDidMount() {

		//handle error with try catch
		const url = 'https://api.randomuser.me/';
		// try{
		// 	const response = await fetch(url);
		// 	if (!response.ok) {
		// 		throw Error(response.StatusText);
		// 	}
		// 	const data = await response.json();
		// 	this.setState({person: data.results[0], isloading: false});

		// 	}catch(error) {
		// 		console.log(error);
		// 	}


		//native function
		const response = await fetch(url)
			  .then(response => response.json())
			  .then(data => {this.setState({person: data.results[0], isloading: !this.state.isLoading})})
			  .catch(err => console.log(err))
			  .finally(console.log('Data is here!'));
			
		}




	render() {
		return(
			<div>
			{this.state.isloading || !this.state.person ? (<Loading />) : (<div>
				<p>
				<img src={this.state.person.picture.large}  alt="random" /><br />
				{this.state.person.name.title}
				{' '}
				{this.state.person.name.first}
				{' '}
				{this.state.person.name.last}
				</p>
				</div>)}
			</div>
			);
		}
	}

export default Data;