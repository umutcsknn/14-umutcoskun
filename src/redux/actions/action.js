
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creators
export const toggleFavorite = (productId) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: productId,
  };
};

export const addToCart = (productDetails) => {
  return {
    type: ADD_TO_CART,
    payload: productDetails,
  };
};
// ...other action creators if needed
