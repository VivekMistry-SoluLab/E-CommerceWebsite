import { FETCH_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_SUCCESS, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from '../actions/actionTypes';

const initialState = {
    products: [],
    product: null,
    loading: true,
    error: {}
  };
  
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
    
  switch (type) {
      case FETCH_PRODUCTS:
        return{
          ...state,
        }

      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: payload,
          loading: false
        };
      case PRODUCT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
        case ADD_PRODUCT:
          return{
            ...state,
          }
        case ADD_PRODUCT_SUCCESS:
          return {
            ...state,
            products: [payload, ...state.products],
            loading: false
          };
        case DELETE_PRODUCT:
          return{
            ...state
          }
        case DELETE_PRODUCT_SUCCESS:
          return {
            ...state,
            products: state.products.filter(product => product._id !== payload),
            loading: false
          };
        
      default:
        return state;
    }
  }