import * as constants from "../constants/map"

export const fetchUserLocation = () => async (dispatch) => {
    navigator.geolocation.getCurrentPosition(function (position) {
        if (position) {
            dispatch({
                type: constants.FETCH_USER_LOCATION,
                payload:position
            })
        }
    })

}