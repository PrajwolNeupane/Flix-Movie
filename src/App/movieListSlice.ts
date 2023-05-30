import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import getPopularMovieList from './Reducer/getPopularMovieList';
import appendPopularMovieList from './Reducer/appendPopularMovieList';
import {Movie} from '../Interface/index.ts';

type InitialState = {
    popularMovie:{
        popularMoiveList:Array<Movie>,
        page:number
    }
   
}

const initialState:InitialState = {
    popularMovie:{
        popularMoiveList:[],
        page:1
    },
}



const MovieListSlice = createSlice({
    name:"MovieList",
    initialState,
    reducers:{
        setPopularPage:(state,action:PayloadAction<any>) => {
            state.popularMovie.page = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getPopularMovieList.fulfilled,(state,action) => {
            state.popularMovie.popularMoiveList = action.payload
        })
        builder.addCase(appendPopularMovieList.fulfilled,(state,action) => {
            if(state.popularMovie.page != 1){
                state.popularMovie.popularMoiveList = state.popularMovie.popularMoiveList.concat(action.payload)
            }
        })
    }
});


export default MovieListSlice.reducer;
export const {setPopularPage} = MovieListSlice.actions; 