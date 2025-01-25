import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "LoginReducer",
    initialState:{
        loggedUser:[]
    },
    reducers:{
        addLoggeduser:(state, action)=>{
            state.loggedUser.push(action.payload)
        },
        clearLoggedData:(state)=>{
            state.loggedUser.length = 0
        }
    }
})
export const {addLoggeduser, clearLoggedData} = LoginSlice.actions
const LoginReducer =  LoginSlice.reducer
export default LoginReducer