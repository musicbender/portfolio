import { combineReducers } from 'redux';

// reducers
import global from './reducer_global';


const rootReducer = combineReducers({
  global
});

export default rootReducer;
