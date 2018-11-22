import { combineReducers } from 'redux';
import Fetch from './middleware/fetch/index.reducer';
import Home from './app/home/index.reducer';
import Preview from './app/preview/index.reducer';

export default combineReducers({
	Fetch,
	Home,
    Preview
});