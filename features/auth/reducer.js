import jwtDecode from "jwt-decode"
import { createSlice } from "@reduxjs/toolkit"
import { authSignup,authSignin, authLoaduser, authSetstaff, authVerifyuser } from "./actions"

const initialState = {
    accessToken: null,
    is_authenticated: false,
    message:"",
    is_loading:false,
    has_requested:false,
    firstname: null,
    lastname: null,
    email: null,
    userId: null,
    user_role: null,
    error: null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(authSignup.pending, (state) =>{
            state.is_loading = true
        })
        .addCase(authSignup.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.message = action.payload.message
        })
        .addCase(authSignup.rejected, (state,action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(authSignin.pending, (state)=>{
            state.is_loading = true
        })
        .addCase(authSignin.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.accessToken = action.payload,
            state.email = jwtDecode(action.payload).email,
            state.firstname = jwtDecode(action.payload).firstname,
            state.lastname = jwtDecode(action.payload).lastname,
            state.userId = jwtDecode(action.payload)._id,
            state.user_role = jwtDecode(action.payload).user_role,
            state.is_authenticated = true
        })
        .addCase(authSignin.rejected, (state,action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(authLoaduser, (state,action)=>{
            state.is_loading = false,
            state.accessToken = action.payload,
            state.email = jwtDecode(action.payload).email,
            state.firstname = jwtDecode(action.payload).firstname,
            state.lastname = jwtDecode(action.payload).lastname,
            state.userId = jwtDecode(action.payload)._id,
            state.user_role = jwtDecode(action.payload).user_role,
            state.is_authenticated = true
        })
        .addCase(authSetstaff.pending, (state,action)=>{
            state.is_loading = false
        })
        .addCase(authSetstaff.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.accessToken = action.payload,
            state.email = jwtDecode(action.payload).email,
            state.firstname = jwtDecode(action.payload).firstname,
            state.lastname = jwtDecode(action.payload).lastname,
            state.userId = jwtDecode(action.payload)._id,
            state.user_role = jwtDecode(action.payload).user_role,
            state.is_authenticated = true
        })
        .addCase(authSetstaff.rejected, (state, action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
        .addCase(authVerifyuser.pending, (state,action)=>{
            state.is_loading = true
        })
        .addCase(authVerifyuser.fulfilled, (state, action)=>{
            state.is_loading = false,
            state.accessToken = action.payload,
            state.email = jwtDecode(action.payload).email,
            state.firstname = jwtDecode(action.payload).firstname,
            state.lastname = jwtDecode(action.payload).lastname,
            state.userId = jwtDecode(action.payload)._id,
            state.user_role = jwtDecode(action.payload).user_role,
            state.is_authenticated = true})
        
        .addCase(authVerifyuser.rejected, (state,action)=>{
            state.is_loading = false,
            state.error = action.payload
        })
    }
})

export default authSlice.reducer