import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user : "",
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        clearUser : (state, action) => {
            state.user = ""
        },
        
        setUser : (state , action) => {
            state.user = action.payload
        }
    }
})