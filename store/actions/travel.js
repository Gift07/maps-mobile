import * as constants from "../constants/travel"
import axiosInstance from "../../axios"

export const createTravel = (body) => async (dispatch) => {
    try {
        dispatch({
            type:constants.CREATE_TRAVEL_REQUEST
        })
        const { data } = await axiosInstance.post('payments/travel', body)
        if (data) {
            dispatch({
                type: constants.CREATE_TRAVEL_SUCCESS,
            })
            window.location.href = `${data}/`
        }
    } catch (error) {
        dispatch({
            type: constants.CREATE_TRAVEL_FAIL,
            payload:error
        })
    }
}

export const fetchTravels = () => async (dispatch) => {
    try {
        dispatch({
            type:constants.FETCH_TRAVEL_REQUEST
        })
        const { data } = await axiosInstance.get('travel')
        dispatch({
            type: constants.FETCH_TRAVEL_SUCCESSFULL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.FETCH_TRAVEL_FAIL,
            payload:error
        })
    }
}