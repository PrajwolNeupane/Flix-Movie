import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';
import movieListSlice from './movieListSlice';
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        movieList:movieListSlice
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch:()=>AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;