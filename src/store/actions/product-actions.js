// actions/product-actions.js

export const fetchProduct = () => {
    return async (dispatch) => {
      dispatch({ type: "FETCH_PRODUCT_START" });
  
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
  
        dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_PRODUCT_ERROR", payload: error.message });
      }
    };
  };
  