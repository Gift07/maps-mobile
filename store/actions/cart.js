import * as constants from "../constants/cart";
import axiosInstance from "../../axios"

// adding to the cart
export const addingToTravels = (cartdata) => async (dispatch) => { 
  console.log(cartdata)
    try {
      dispatch({
        type: constants.ADD_TO_CART_REQUEST,
      });

      localStorage.setItem("cartItems", JSON.stringify(cartdata));

      dispatch({
        type: constants.ADD_TO_CART_SUCCESSFULL,
        payload: cartdata,
      });
    }catch (error) {
      dispatch({
        type: constants.ADD_TO_CART_FAILED,
        payload: error,
      });
    }
  } 

export const fetchTravels = () => async (dispatch) => {
    try {
        dispatch({
            type:constants.FETCH_TRAVELS_REQUEST
        })
        const { data } = await axiosInstance.get('/travels')
        dispatch({
            type: constants.FETCH_TRAVELS_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.FETCH_TRAVELS_FAIL,
            payload:error
        })
    }
}
