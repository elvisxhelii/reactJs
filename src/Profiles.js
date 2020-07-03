import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';
 
class Profiles extends React.Component {

	constructor(props){
		super(props);


		this.state = {
			top_profiles: [
				{name: 'Ted', age: '26', bio: '1st bio'},
				{name: 'Tom', age: '35', bio: '2nd bio'},
				{name: 'Tim', age: '40', bio: '3d bio'},
			],
			other_profiles: [
				{name: 'Max', age: '4', bio: 'im Max'},
				{name: 'Bob', age: '5', bio: 'im Bob'},
				{name: 'Fox', age: '6', bio: 'random'},
			],
		};

	}

	render() {
		return(
			<div className="row text-center customclass" style={{margin : '0',fontSize: '14px'}}>
				<h3 className="test1">Top Profiles</h3>
				{this.state.top_profiles.map(profile => <Profile profile={profile} />)}
				<hr /><hr />
				<h3 className="test1">Other Profiles</h3>
				{this.state.other_profiles.map(profile => <Profile profile={profile} />)}
			</div>
			)
	}
};

export default Profiles;