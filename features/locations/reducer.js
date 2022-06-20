import {createSlice} from "@reduxjs/toolkit"
import { approveLocation, createLocation, fetchLocation, fetchLocationId } from "./actions"

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

const locationSlice = createSlice({
    name:"location",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createLocation.pending, (state, action)=>{
            state.is_loading = true
        })
        .addCase(fetchLocation.pending,(state)=>{
            state.is_loading = true
        })
        .addCase(fetchLocationId.pending, (state)=>{
            state.is_loading = true
        })
        .addCase(approveLocation.fulfilled, (state,action)=>{
            state.is_loading = false,
            state.message = action.payload
        })
        .addCase(createLocation.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.message = action.payload
        })
        .addCase(fetchLocation.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.locations = action.payload
        })
        .addCase(fetchLocationId.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.location = action.payload.data,
            state.location.bikes = action.payload.bike
        })
        .addCase(fetchLocation.rejected, (state,action) =>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(fetchLocationId.rejected, (state, action) =>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(approveLocation.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(createLocation.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
    }
})

export default locationSlice.reducer