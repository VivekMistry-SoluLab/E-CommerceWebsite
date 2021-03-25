// import { put } from "redux-saga/effects";

// import { addToCartSuccess, removeFromCartSuccess } from '../actions/cartActions';
// import axios from 'axios';

// export function* addToCartSaga(actionData, getState){
//     // yield console.log(actionData);
//     const  { data } = yield axios.get(`/api/products/${actionData.id}`)
//     const update = {
//         ...data,
//         qty:actionData.qty
//     }
//     yield put(addToCartSuccess(update))
//     // yield localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  
// }