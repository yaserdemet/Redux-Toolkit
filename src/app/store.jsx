import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";


const store= configureStore({
    reducer : {
            auth : authReducer,
            news : newsReducer
    },
    devTools : process.env.NODE_ENV !== "production"
    //? production da değil ise devTool u kapat.
})

export default store;

//* configure store u toolkitten import et.
//! reducer ları birlestirir.