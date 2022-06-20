import axiosInstance from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addingToTravels = createAsyncThunk("cart/add_to_cart", async(body)=>{
    try {
        AsyncStorage.setItem("cartItems", JSON.stringify(body));

        return body
    } catch (error) {
       return error.message 
    }
})

export const fetchTravels = createAsyncThunk("cart/fetch_travels", async()=>{
    try {
        const { data } = await axiosInstance.get('/travels')

        return data
    } catch (error) {
        return error.message
    }
})