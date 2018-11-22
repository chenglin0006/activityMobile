import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './app/home/index';
import Loadable from 'react-loadable'
// import Preview from './app/preview/index';

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Preview = Loadable({
    loader: () => import('./app/preview/index'),
    loading: MyLoadingComponent
});

export default () => {
	return (
		<Router>
			<div id="router">
				<Route exact path="/" component={Home} />
				<Route exact path="/preview" component={Preview} />
			</div>
		</Router>
	);
}
