import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';
import movieListSlice from './movieListSlice';

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        movieList:movieListSlice
    }
})