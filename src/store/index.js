import { createStore, applyMiddleware } from 'redux';  // aquí esta extrayendo los elementos que están entre llaves desde el archivo indicado
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';  // equivale a const reducer = require('../reducers/index')
import state from './initialState';

export default createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
