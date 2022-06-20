import * as constants from "../constants/travel"

const initialState = {
    travel_loading: false,
    travel: [],
    error: null,
}

const travelReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_TRAVEL_REQUEST:
        case constants.CREATE_TRAVEL_REQUEST:
            return {
                ...state,
                travel_loading: true,
                
            }
        case constants.FETCH_TRAVEL_SUCCESSFULL:
            return {
                ...state,
                travel_loading: false,
                travel:action.payload.data
            }
        case constants.CREATE_TRAVEL_SUCCESS:
            return {
                ...state,
                travel_loading: false,
            }
        case constants.CREATE_TRAVEL_FAIL:
        case constants.FETCH_TRAVEL_FAIL:
            return {
                ...state,
                travel_loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}

export default travelReducer;