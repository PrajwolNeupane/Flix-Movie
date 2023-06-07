import {createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    likeMovie:Array<any>,
    watchLaterMovie:Array<any>
}

const initialState:InitialState = {
    likeMovie:[],
    watchLaterMovie:[]
}

const firestoreMovieSlice = createSlice({
    name:"FireStoreMovie",
    initialState,
    reducers:{
     setLikeMovie:(state,action:PayloadAction<any>) =>{
        state.likeMovie = action.payload
     },
     setWatchLaterMovie:(state,action:PayloadAction<any>) => {
        state.watchLaterMovie = action.payload
     }
    },
});

export default firestoreMovieSlice.reducer;
export const{setLikeMovie,setWatchLaterMovie} = firestoreMovieSlice.actions;