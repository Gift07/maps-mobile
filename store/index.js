import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import bikesReducer from './reducers/bikes';
import locationReducer from "./reducers/location";
import mapReducer from "./reducers/map";
import cartReducer from './reducers/cart';
import travelReducer from "./reducers/travel"
import rentReducer from "./reducers/rent"
import myRentsReducer from "./reducers/myrent";

const reducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
    bikes: bikesReducer,
    map: mapReducer,
    cart: cartReducer,
    travel: travelReducer,
    rent: rentReducer,
    myrents:myRentsReducer
    
})

export default reducer