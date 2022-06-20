import *  as constants from "../constants/map"

const initialState = {
    lat: null,
    long:null
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_USER_LOCATION:
            return {
                lat: action.payload.coords.latitude,
               long:action.payload.coords.longitude 
            }
        default:
            return state;
    }
}

export default mapReducer