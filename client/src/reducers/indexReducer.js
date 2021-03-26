import { combineReducers } from 'redux';
import product from './productReducer';
import cart from './cartReducer';

export default combineReducers({
  product,
  cart
});