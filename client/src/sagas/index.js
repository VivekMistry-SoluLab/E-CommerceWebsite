import { takeEvery } from "redux-saga/effects";

import { FETCH_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, ADD_ITEM_TO_CART } from '../actions/actionTypes';
import { fetchProductsSaga, addProductSaga, deleteProductSaga } from './product';
// import { addToCartSaga } from './cart'

export function* watchProduct() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga)
    yield takeEvery(ADD_PRODUCT, addProductSaga)
    yield takeEvery(DELETE_PRODUCT, deleteProductSaga)
}

// export function* watchCart() {
//     yield takeEvery(ADD_ITEM_TO_CART, addToCartSaga)
// }