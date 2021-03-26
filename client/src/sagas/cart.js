import { put, select } from "redux-saga/effects";

import { addToCartSuccess, removeFromCartSuccess } from '../actions/cartActions';
import axios from 'axios';

export function* addToCartSaga(actionData){
    const  { data } = yield axios.get(`/api/products/${actionData.id}`)
    const update = {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        qty: actionData.qty
    }
    yield put(addToCartSuccess(update))
    const state = yield select()
    yield localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems))
  
}

export function* removeFromCartSaga(actionData){
    yield put(removeFromCartSuccess(actionData.id))
    const state = yield select()
    yield localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems))
}