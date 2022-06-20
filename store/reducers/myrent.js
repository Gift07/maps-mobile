import * as constants from "../constants/myrents"

const initialState = {
    my_loading: false,
    myrents: [],
    error: null,
    message:""
}

const myRentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.CREATE_MYRENT_REQUEST:
        case constants.FETCH_MYRENT_REQUEST:
            return {
                ...state,
                my_loading: true
            }
        case constants.FETCH_MYRENT_SUCCESS:
            return {
                ...state,
                my_loading: false,
                myrents :action.payload
            }
        case constants.CREATE_MYRENT_SUCCESS:
            return {
                ...state,
                message: "my rent added successfull",
                my_loading: false,
            }
        case constants.CREATE_MYRENT_FAIL:
        case constants.FETCH_MYRENT_FAIL:
            return {
                ...state,
                my_loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default myRentsReducer