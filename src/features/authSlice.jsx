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
        //? reducerın içine yazılanlar birer function(state,action) parametresi alır.
        
        setUser : (state , action) => {
            state.user = action.payload
        //? user bilgisi inputtan gelecegi için action.payload seklinde tanımladık
        }
    }
})
export const {setUser , clearUser} = authSlice.actions;
export default authSlice.reducer