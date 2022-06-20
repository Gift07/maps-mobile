import axiosInstance from "../../axios";
import * as constants from "../constants/rent"

export const rentBike = (body) => async (dispatch) => {
    console.log(body)
    try {
        dispatch({
            type: constants.RENT_BIKE_REQUEST
        })

        const { data } = await axiosInstance.post('rent', body)
        
        dispatch({
            type: constants.RENT_BIKE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.RENT_BIKE_FAILURE,
            payload:error
        })
    }
}

export const fetchRent = () => async (dispatch) => {
    try {
        dispatch({
            type: constants.FETCH_RENT_REQUEST,
        })
        const { data } = await axiosInstance.get("rent")
        
        dispatch({
            type: constants.FETCH_RENT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.FETCH_RENT_FAIL,
            payload:error
        })
    }
}

export const returnBike = (body) => async (dispatch) =>{
    console.log(body)
    try {
        dispatch({
            type:constants.RETURN_BIKE_REQUEST
        })
        const { data } = await axiosInstance.patch("rent", body)
        console.log(data)
        localStorage.setItem("payment", JSON.stringify(data))
        dispatch({
            type: constants.RETURN_BIKE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.RETURN_BIKE_FAIL,
            payload: error
        })
    }
}