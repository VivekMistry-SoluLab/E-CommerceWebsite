import { put } from "redux-saga/effects";

import { fetchProductsSuccess, addProductSuccess, deleteProductSuccess } from '../actions/productActions';
import axios from 'axios';

export function* fetchProductsSaga(action) {
    try{
        const res = yield axios.get("/api/products");
        yield put(fetchProductsSuccess(res.data));
    } catch(error){
        yield alert(error)
    }
}

export function* addProductSaga(actionData) {
    const token = yield localStorage.getItem('token');
    console.log(actionData);
  const config = yield {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }
 
  try {
    const res = yield axios.post('/api/products', actionData.formData, config);
    yield put(addProductSuccess(res.data))
    } catch (err) {
       yield alert(err + `  Product cannot be added`);
    }
}


export function* deleteProductSaga(actionData) {
    const token = yield localStorage.getItem('token');
    const config = yield {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    try {
    yield axios.delete(`/api/products/${actionData.id}`, config);
    yield put(deleteProductSuccess(actionData.id))
    } catch (err) {
       yield alert(err);
    }
}