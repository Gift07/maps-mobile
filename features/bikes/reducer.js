import { createSlice } from "@reduxjs/toolkit";
import { createBike, fetchBikeId, fetchBikes, rentTheBike, returnTheBike } from "./action";

const initialState = {
    is_loading: false,
    bikes: [],
    bike: {},
    error: "",
    message:"",
}

const bikeSlice = createSlice({
    name:"bikes",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createBike.pending, (state)=>{
            state.is_loading = true
        })
        .addCase(fetchBikeId.pending, state =>{
            state.is_loading = true
        })
        .addCase(fetchBikes.pending, state=>{
            state.is_loading = true
        })
        .addCase(createBike.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.message = action.payload
        })
        .addCase(fetchBikes.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.bikes = action.payload
        })
        .addCase(fetchBikeId.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.bike = action.payload
        })
        .addCase(rentTheBike.fulfilled,(state, action)=>{
            state.is_loading = false,
            state.message = action.payload
        })
        .addCase(returnTheBike.fulfilled, (state, action)=>{
            state.is_loading = true,
            state.message = action.payload
        })
        .addCase(createBike.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(fetchBikes.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(fetchBikeId.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
    }
})

export default bikeSlice.reducer