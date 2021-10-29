import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';

const Data = lazy(() => import('./Data'));

const renderLoader = () => <p>Loading</p>;

class Home extends React.Component {

	constructor(props){
		super(props);
		this.state={
			display: false
		};
		this.testLazy=this.testLazy.bind(this);
	}

	testLazy() {

		this.setState({display: !this.state.display})
	}


	render() {
		return(
			<div className="newCLass" style={{marginBottom: "50px"}}>
				<div>
					<h1>Welcome to REACT!</h1>
				</div>
				<img 
					src={logo} 
					alt="logo" 
				/>
				<button onClick={this.testLazy}>Click me!</button>
				<div style={{marginTop: '25px'}}> 
				{this.state.display ? 
					<Suspense fallback={renderLoader()}>
						<Data/>
					</Suspense>
					: (null)
				}
					
				</div>
			</div>
		);
	}
}

export default Home;