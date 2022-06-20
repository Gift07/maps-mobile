import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchLocation = createAsyncThunk("location/fetch", async()=>{
    try {
        const { data } = await axiosInstance.get('location')

        return data.data
    } catch (error) {
        return error.message
    }
})

export const fetchLocationId = createAsyncThunk('location/fetchId', async(id)=>{
    try {
        const { data } = await axiosInstance.get(`location/${id}`)
        return data
    } catch (error) {
        return error.message
    }
})

export const createLocation = createAsyncThunk("location/create", async(body)=>{
    try {
        const { data } = await axiosInstance.post('location', body)

        return data.message
    } catch (error) {
        return error.message
    }
})

export const approveLocation = createAsyncThunk("location/approve", async(id)=>{
    try {
        const {data} = await axiosInstance.patch('location/approve', {locationId:id})

        return data.message
    } catch (error) {
        return error.message
    }
})