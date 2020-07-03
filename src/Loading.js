import React from 'react';
import loading from './loading.gif';

class Loading extends React.Component {
	
	render() {
		return(
		<img 
		src={loading} 
		alt="loading"
		/>
		)
	};



}

export default Loading;