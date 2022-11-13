import {createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//* async işlemler için createAsyncThınk ı import edip extraReducers lar içinde functionları belirle.

const initialState= {
    loading : true,
    newsList : []
}

const API_KEY = process.env.REACT_APP_API_KEY

export const getNews = createAsyncThunk(
    "news/getNews",

    async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

        try {
            const {data} = await axios.get(url)
            return data.articles
        } catch(err) {
            console.log(err)
        }
    } 
)

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers : {
        clearNewsList : (state, action) => {
            state.newsList = []
        },
    },

    extraReducers : {
        [getNews.pending] : (state, action) =>{
            state.loading = false
        },

        [getNews.fulfilled] : (state, action) => {
            state.loading = false;
            state.newsList = action.payload

        },
        [getNews.rejected] : (state,action) => {
            state.loading = false
        }
    }
})

export const {clearNewsList} = newsSlice.actions;
export default newsSlice.reducer