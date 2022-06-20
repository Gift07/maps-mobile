import * as constants from "../constants/rent"

const initialState = {
    rent_loading: false,
    error:null,
    price: 0,
    timetaken: 0,
    startTime: null,
    checkout:false,
    rent: [],
    message:""
}

const rentReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.RENT_BIKE_REQUEST:
        case constants.FETCH_RENT_REQUEST:
        case constants.RETURN_BIKE_REQUEST:
            return {
                ...state,
                rent_loading:true,
            }
        case constants.FETCH_RENT_SUCCESS:
            return {
                ...state,
                rent_loading: false,
                rent:action.payload
            }
        case constants.RENT_BIKE_SUCCESS:
            return {
                ...state,
                rent_loading: false,
                message:"rent bike successfully"
            }
        case constants.RETURN_BIKE_SUCCESS:
            return {
                ...state,
                rent_loading: false,
                message: "bike returned successfull",
                timetaken: action.payload.timeTaken,
                price: action.payload.price,
                startTime: action.payload.startTime,
                checkout:true
            }
        case constants.RETURN_BIKE_FAIL:
        case constants.RENT_BIKE_FAILURE:
        case constants.FETCH_RENT_FAIL:
            return {
                ...state,
                rent_loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default rentReducer