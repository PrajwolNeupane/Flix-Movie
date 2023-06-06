import {createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    likeMovie:Array<any>
}

const initialState:InitialState = {
    likeMovie:[]
}

const firestoreMovieSlice = createSlice({
    name:"FireStoreMovie",
    initialState,
    reducers:{
     setLikeMovie:(state,action:PayloadAction<any>) =>{
        state.likeMovie = action.payload
     }
    },
});

export default firestoreMovieSlice.reducer;
export const{setLikeMovie} = firestoreMovieSlice.actions;