import { 
  FETCH_PRODUCTS, 
  ADD_PRODUCT, 
  DELETE_PRODUCT, 
  FETCH_PRODUCTS_SUCCESS, 
  ADD_PRODUCT_SUCCESS, 
  DELETE_PRODUCT_SUCCESS
 } from './actionTypes';



export const fetchProducts = () => {
  return{
    type: FETCH_PRODUCTS
  }
}
export const fetchProductsSuccess = (productData) => {
   return{
    type: FETCH_PRODUCTS_SUCCESS,
    payload: productData
   }
};

export const addProduct = (formData) =>{
  return{
    type:ADD_PRODUCT,
    formData
  }
}
export const addProductSuccess = (prodData) => {
  return{
    type: ADD_PRODUCT_SUCCESS,
    payload: prodData
  }  
};


export const deleteProduct = (id) => {
  return{
    type: DELETE_PRODUCT,
    id
  }
}

export const deleteProductSuccess = (idData) => {
  return {   
      type: DELETE_PRODUCT_SUCCESS,
      payload: idData

  }
}
