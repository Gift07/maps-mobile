import axiosInstance from "../../axios"
import {createAsyncThunk} from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSignup = createAsyncThunk("auth/signup", async(body)=>{
    try {
        const { data } = await axiosInstance.post('auth/sign-up', body)
        // adding data to async storage
        AsyncStorage.setItem(
            "token",data.token
        );
        // returning the data
        return data.token
    } catch (error) {
        return error.message
    }
})

export const authVerifyuser = createAsyncThunk("auth/verify-user", async(body)=>{
    try {
        AsyncStorage.removeItem("token")

        const { data } = await axiosInstance.patch('auth/verify-phone', body)
        AsyncStorage.setItem("accessToken", data.accessToken)

        return data.accessToken
    } catch (error) {
        return error.message
    }
})

export const authSignin = createAsyncThunk("auth/signin", async(body)=>{
    try {
        const { data } = await axiosInstance.post('auth/sign-in', body)
        // adding data to async storage
        AsyncStorage.setItem(
            "accessToken",data.accessToken
        );
        // returning the data
        return data.accessToken
    } catch (error) {
        return error.message
    }
})

export const authLoaduser = createAsyncThunk("auth/load-user", async()=>{
    console.log("here")
    const accessToken = AsyncStorage.getItem('accessToken')
    const data = {
        accessToken
    }
  if (data) {
    return data.accessToken
  } else return null;
})

export const authSetstaff = createAsyncThunk("auth/set-staff", async(id)=>{
    try {
        const {data} = await axiosInstance.post('auth/set-staff',{userId:id})

        if (data) {
         AsyncStorage.removeItem("accessToken")
        // setting the token to the locastorage
        localStorage.setItem(
            "accessToken",data.accessToken
        );
        return data.accessToken
        }
    } catch (error) {
        return error.message
    }
})

export const authRequested = createAsyncThunk("auth/requested", async(body)=>{
    try {
        const {data} = await axiosInstance.post('request/staff',{id})
        if (data) {
            AsyncStorage.removeItem("accessToken")
            // setting the token to the locastorage
            AsyncStorage.setItem(
                "accessToken",data.accessToken
            );
            return data.accessToken
            }
    } catch (error) {
        return error.message
    }
})