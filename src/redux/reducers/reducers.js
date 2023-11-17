import { TOGGLE_FAVORITE, ADD_TO_CART } from './actions';


const initialState = {
  favorites: [],
  cartItems: [],
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      
      const productId = action.payload;
      const isFavorited = state.favorites.includes(productId);
      const updatedFavorites = isFavorited
        ? state.favorites.filter((id) => id !== productId)
        : [...state.favorites, productId];
      return {
        ...state,
        favorites: updatedFavorites,
      };

    case ADD_TO_CART:
      
      const productDetails = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems, productDetails],
      };

   

    default:
      return state;
  }
};

export default appReducer;
