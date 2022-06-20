import * as constants from "../constants/cart";
const initialState = {
  cartloading: false,
  cartItems: {
    location: null,
    bike:null
  }
}
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // adding to cart
    case constants.ADD_TO_CART_REQUEST:
      return { ...state, cartloading: true };
    case constants.ADD_TO_CART_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        cartItems: {
          location: payload.bikeLocation,
          bike:payload.bikeId
      } };
    case constants.ADD_TO_CART_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default cartReducer
