import { 
  ADD_ITEM_TO_CART, 
  REMOVE_FROM_CART, 
  ADD_ITEM_TO_CART_SUCCESS, 
  REMOVE_FROM_CART_SUCCESS
 } from './actionTypes';


export const addToCart = (id, qty) => {
    return{
      type: ADD_ITEM_TO_CART,
      id,
      qty
    }
  }
  export const addToCartSuccess = (cartData) => {
    return{
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: cartData,
    }
  }
  
  export const removeFromCart = (id) => {
      return{
      type: REMOVE_FROM_CART,
       id,
      }
  }

  export const removeFromCartSuccess = (dataId) => {
    return{
      type:REMOVE_FROM_CART_SUCCESS,
      payload: dataId
    }
  }