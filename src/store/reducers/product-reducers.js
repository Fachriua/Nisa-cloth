// reducers/product-reducer.js

const initialState = {
    products: [], // State awal berupa array kosong
    isLoading: false, // Untuk menandakan proses loading
    error: null, // Untuk menangani error
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_START":
        return { ...state, isLoading: true, error: null };
  
      case "FETCH_PRODUCT_SUCCESS":
        return { ...state, isLoading: false, products: action.payload };
  
      case "FETCH_PRODUCT_ERROR":
        return { ...state, isLoading: false, error: action.payload };
  
      default:
        return state; // Selalu kembalikan state untuk action yang tidak dikenal
    }
  };
  
  export default productReducer;
  