import { combineReducers } from 'redux'
import repoReducer from './repos'

const allReducers = combineReducers({
  repo: repoReducer
});

export default allReducers;
