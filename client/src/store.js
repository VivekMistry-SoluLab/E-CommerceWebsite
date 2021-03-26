import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/indexReducer';
import createSagaMiddleware from "redux-saga";
import { watchProduct, watchCart } from './sagas/indexSaga';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []


const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchProduct)
 sagaMiddleware.run(watchCart)

export default store;