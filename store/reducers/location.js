import * as constants from "../constants/location"

const initialState = {
    is_loading: false,
    locations:[],
    location: {
        location: null,
        bikes:[]
    },
    error: null,
    message:null,
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOCATIONS_FETCHING_REQUEST:
        case constants.LOCATION_FETCHING_REQUEST:
        case constants.LOCATION_CREATE_REQUEST:
        case constants.LOCATION_APPROVAL_REQUEST:
            return {
                ...state,
                is_loading: true,
                
            }
        case constants.LOCATIONS_FETCHING_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                locations:action.payload.data
            }
        case constants.LOCATION_FETCHING_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                location: {
                    location: action.payload.data,
                    bikes:action.payload.bike
                }
            }
        case constants.LOCATION_CREATE_SUCCESSFUL:
        case constants.LOCATION_APPROVAL_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                message:action.payload.message
            }
        case constants.LOCATION_CREATE_FAIL:
        case constants.LOCATIONS_FETCHING_FAIL:
        case constants.LOCATION_CREATE_FAIL:
        case constants.LOCATION_APPROVAL_FAIL:
            return {
                ...state,
                is_loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}

export default locationReducer;