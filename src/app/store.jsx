import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.reducer";
import newsReducer from "../features/newsSlice.reducer";


const store= configureStore({
    reducer : {
            auth : authReducer,
            news : newsReducer
    },
    devTools : process.env.NODE_ENV !== "production"
    //? production da değil ise devTool u kapat.
})

export default store;