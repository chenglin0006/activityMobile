import {combineReducers} from 'redux';
import Fetch from './middleware/fetch/index.reducer';
import Home from './app/home/index.reducer'
import Register from './app/register/index.reducer'

export default combineReducers({
  Fetch,
  Home,
    Register
});
