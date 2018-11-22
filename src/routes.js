import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './app/home/index';
import Loadable from 'react-loadable'
// import Register from './app/register/index';

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div style={{textAlign:'center',marginTop:'150px'}}>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Register = Loadable({
    loader: () => import('./app/register/index'),
    loading: MyLoadingComponent
});

export default () => {
	return (
		<Router>
			<div id="router">
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
			</div>
		</Router>
	);
}
