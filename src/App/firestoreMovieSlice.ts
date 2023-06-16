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
     removeLikeMovie:(state,action:PayloadAction<any>) => {
      state.likeMovie.splice(action.payload,1);
     }
     ,
     setWatchLaterMovie:(state,action:PayloadAction<any>) => {
        state.watchLaterMovie = action.payload
     }, 
     removeWatchLaterMovie:(state,action:PayloadAction<any>) => {
      state.watchLaterMovie.splice(action.payload,1);
     }
    },
});

export default firestoreMovieSlice.reducer;
export const{setLikeMovie,removeLikeMovie,setWatchLaterMovie,removeWatchLaterMovie} = firestoreMovieSlice.actions;