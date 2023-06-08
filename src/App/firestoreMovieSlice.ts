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
     appendLikeMovie:(state,action:PayloadAction<any>)=>{
        state.likeMovie =  state.likeMovie.concat([action.payload]);
     },
     setWatchLaterMovie:(state,action:PayloadAction<any>) => {
        state.watchLaterMovie = action.payload
     }, 
     appendWatchLaterMovie:(state,action:PayloadAction<any>)=>{
        state.watchLaterMovie =  state.watchLaterMovie.concat([action.payload]);
     },
    },
});

export default firestoreMovieSlice.reducer;
export const{setLikeMovie,appendLikeMovie,setWatchLaterMovie,appendWatchLaterMovie} = firestoreMovieSlice.actions;