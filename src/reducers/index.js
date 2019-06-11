import { combineReducers } from 'redux';
import lights from './lights';
import meals from './meals';
export default combineReducers({
  lights,
  meals
});
