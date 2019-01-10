import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import global from './global';
import user from './user';
// import user from './user';
// import product from './products';

export default (history) => combineReducers({
  router: connectRouter(history),
  global,
  user
})
