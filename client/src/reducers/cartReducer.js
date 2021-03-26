import { 
  ADD_ITEM_TO_CART, 
  ADD_ITEM_TO_CART_SUCCESS, 
  REMOVE_FROM_CART, 
  REMOVE_FROM_CART_SUCCESS
 } from '../actions/actionTypes';

const initialState = {
    cartItems: [],
  };
  
  export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {

        case ADD_ITEM_TO_CART:
          return{
            ...state
          }
        case ADD_ITEM_TO_CART_SUCCESS:
        const existItem = state.cartItems.find((x) => x.product === payload.product)

          if (existItem) {
            
            return {
              ...state,
              cartItems: state.cartItems.map((x) =>
                x.product === existItem.product ? payload : x
              ),
            }
          } else {
          return {
              ...state,
              cartItems: [...state.cartItems, payload],
          }  
        }   
        case REMOVE_FROM_CART:       
        case REMOVE_FROM_CART_SUCCESS:
          return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== payload),
          }   
        default:
          return state;
    }
  }