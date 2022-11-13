import {createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//* async işlemler için createAsyncThınk ı import edip extraReducers lar içinde functionları belirle.

const initialState = {
    newList : [],
    loading : true
}

const API_KEY = process.env.REACT_APP_API_KEY

export const getNews = createAsyncThunk(
    "news/getNews", //! action-type ismi
    async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`

        try {
            const {data} = await axios.get(url)
            return data.articles
        } catch(error) {
            console.log(error);
        }
        
    }
   
)

const userSlice = createSlice({
    name : "news",
    initialState : initialState,
    reducers: {
        clearNews : (state, action) => {
                state.newList = []
        },

      

        //? apiden veri çekme işlemi için thunk middleware kullanılmalıdır.


    }
})