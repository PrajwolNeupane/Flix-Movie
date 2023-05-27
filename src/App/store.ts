import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';

export const store = configureStore({
    reducer:{
        auth:AuthSlice
    }
})