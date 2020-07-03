import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Data from './Data';
import Form from './Form';
import Home from './Home';
import Registered from './Registered';
import Profiles from './Profiles';
import Profile from './Profile';
import Loading from './Loading';

function App() {
  return (
    <div className="App">
    	<Router>
            <nav className="navbar1">
                <Link className="test" to="/">Home</Link>
                <Link className="test" to="/register">Register</Link>
                <Link className="test" to="/data">Dummy Data</Link>
                <Link className="test" to="/profiles">Profiles</Link>
            </nav>
    		<Switch>
    			<Route path="/" exact component={Home}/>
    			<Route path="/data" exact component={Data} />
    			<Route path="/register" exact component={Form} />
    			<Route path="/registered" exact component={Registered}/>
                <Route path="/profiles" exact component={Profiles}/>
                <Route path="/profile/:param" exact component={Profile}/>
    			<Route path="/" 
    			render={() => (<div>
                                                <Loading />
                                                Ooops an error occured!
                                                <Link to="/">{' <='} Go back</Link>
                                              </div>)} />
    		</Switch>
    	</Router>
    </div>
  );
}

export default App;
