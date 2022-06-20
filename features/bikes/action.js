import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const createBike = createAsyncThunk("bikes/create", async(body)=>{
    try {
        const { data } = await axiosInstance.post('/bikes', body)

        return data.message
    } catch (error) {
        return error.message
    }
})

export const fetchBikes= createAsyncThunk("bikes/fetch", async()=>{
    try {
        const { data } = await axiosInstance.get('/bikes')

        return data
    } catch (error) {
       return error.message 
    }
})

export const fetchBikeId = createAsyncThunk("bikes/fetchId", async(id)=>{
    try {
        const { data } = await axiosInstance.get(`/bikes/${id}`)

        return data
    } catch (error) {
        return error.message
    }
})

export const rentTheBike = createAsyncThunk("bikes/rent", async(id)=>{
    try {
        const { data } = await axiosInstance.patch("/bikes/rent", { id }) 

        return data
    } catch (error) {
        return error.message
    }
})

export const returnTheBike = createAsyncThunk("bikes/return", async(id)=>{
    try {
        const { data } = await axiosInstance.patch("/bikes/return", body) 

        return data
    } catch (error) {
       return error.message 
    }
})