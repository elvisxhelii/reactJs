import React from 'react';
import Name from './Name';
import { Link } from 'react-router-dom';
class Profile extends React.Component {

	render() {
		return (
			<div>
				<img className="image" src="https://i.imgur.com/CYxKn4b.jpg" alt="" />
				<Name name={this.props.profile.name} />
				<p>
					age: {this.props.profile.age}
					<br />
					bio: {this.props.profile.bio}
				</p>
			</div>
			);
		}
	}

export default Profile;