import * as constants from "../constants/bikes"

const initialState = {
    is_loading: false,
    bikes: [],
    bike: null,
    returntBike:false,
    error: null,
    message:"",
    message:null,
}

const bikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.BIKES_FETCHING_REQUEST:
        case constants.BIKE_FETCHING_REQUEST:
        case constants.BIKE_CREATE_REQUEST:
            return {
                ...state,
                is_loading: true
            }
        case constants.BIKES_FETCHING_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                bikes:action.payload
            }
        case constants.BIKE_FETCHING_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                bike:action.payload
            }
        case constants.BIKE_CREATE_SUCCESSFUL:
            return {
                ...state,
                is_loading: false,
                message:action.payload.message
            }
        case constants.BIKE_CREATE_FAIL:
        case constants.BIKES_FETCHING_FAIL:
        case constants.BIKE_CREATE_FAIL:
            return {
                ...state,
                is_loading: false,
                error:action.payload
            }
        case constants.RENT_THE_BIKE:
        case constants.RETURN_THE_BIKE:
            return {
                ...state,
                is_loading: false,
                message:action.payload
            }
        case "RETURN":
            return{
                ...state,
                is_loading:false,
                returntBike:true
            }
        case "NORETURN":
            return{
                ...state,
                is_loading:false,
                returntBike:false
            }
        default:
            return state;
    }
}

export default bikesReducer