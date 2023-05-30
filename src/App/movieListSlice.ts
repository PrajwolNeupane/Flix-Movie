import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import getPopularMovieList from './Reducer/getPopularMovieList';
import appendPopularMovieList from './Reducer/appendPopularMovieList';
import {Movie} from '../Interface/index.ts';
import getUpComingMovieList from './Reducer/getUpComingMovieList.ts';
import appendUpComingMovieList from './Reducer/appendUpComingMovieList.ts';

type InitialState = {
    popularMovie:{
        popularMoiveList:Array<Movie>,
        page:number
    },
    upComingMovie:{
        upComingMovieList:Array<Movie>,
        page:number
    }
   
}

const initialState:InitialState = {
    popularMovie:{
        popularMoiveList:[],
        page:1
    },
    upComingMovie:{
        upComingMovieList:[],
        page:1
    }
}



const MovieListSlice = createSlice({
    name:"MovieList",
    initialState,
    reducers:{
        setPopularPage:(state,action:PayloadAction<any>) => {
            state.popularMovie.page = action.payload
        },
        setUpComingPage:(state,action:PayloadAction<any>) => {
            state.upComingMovie.page = action.payload
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
        builder.addCase(getUpComingMovieList.fulfilled,(state,action) => {
            state.upComingMovie.upComingMovieList = action.payload
        })
        builder.addCase(appendUpComingMovieList.fulfilled,(state,action) => {
            if(state.upComingMovie.page != 1){
                state.upComingMovie.upComingMovieList = action.payload
            }
        })
    }
});


export default MovieListSlice.reducer;
export const {setPopularPage,setUpComingPage} = MovieListSlice.actions; 