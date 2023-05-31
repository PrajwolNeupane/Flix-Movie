import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import {Movie} from '../Interface/index.ts';
import {appendPopularMovieList,getUpComingMovieList,getTrendingMovieList,getPopularMovieList,getTopRatedMovieList, appendTopRatedMovieList, appendUpComingMovieList, appendTrendingMovieList,} from '../App/Reducer/movieReducer.ts';

type InitialState = {
    popularMovie:{
        popularMoiveList:Array<Movie>,
        page:number
    },
    upComingMovie:{
        upComingMovieList:Array<Movie>,
        page:number
    },
    trendingMovie:{
        trendingMovieList:Array<Movie>,
        page:number
    },
    topRatedMovie:{
        topRatedMovieList:Array<Movie>,
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
    },
    trendingMovie:{
        trendingMovieList:[],
        page:1
    },
    topRatedMovie:{
        topRatedMovieList:[],
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
        },
        setTrendingPage:(state,action:PayloadAction<any>) => {
            state.trendingMovie.page = action.payload
        },
        setTopRatedPage:(state,action:PayloadAction<any>) => {
            state.topRatedMovie.page = action.payload
        }
    },
    extraReducers:(builder) => {
        //Builder for Popular Movie List
        builder.addCase(getPopularMovieList.fulfilled,(state,action) => {
            state.popularMovie.popularMoiveList = action.payload
        })
        builder.addCase(appendPopularMovieList.fulfilled,(state,action) => {
            if(state.popularMovie.page != 1){
                state.popularMovie.popularMoiveList = state.popularMovie.popularMoiveList.concat(action.payload)
            }
        })
        //Builder for Up Coming Movie List
        builder.addCase(getUpComingMovieList.fulfilled,(state,action) => {
            state.upComingMovie.upComingMovieList = action.payload
        })
        builder.addCase(appendUpComingMovieList.fulfilled,(state,action) => {
            if(state.upComingMovie.page != 1){
                state.upComingMovie.upComingMovieList = state.upComingMovie.upComingMovieList.concat(action.payload)
            }
        })
        //Builder for Trending Movie List
        builder.addCase(getTrendingMovieList.fulfilled,(state,action) => {
            state.trendingMovie.trendingMovieList = action.payload
        })
        builder.addCase(appendTrendingMovieList.fulfilled,(state,action) => {
            if(state.trendingMovie.page != 1){
                state.trendingMovie.trendingMovieList = state.trendingMovie.trendingMovieList.concat(action.payload)
            }
        })
        //Builder for Top Rated Movie List
        builder.addCase(getTopRatedMovieList.fulfilled,(state,action) => {
            state.topRatedMovie.topRatedMovieList = action.payload
        })
        builder.addCase(appendTopRatedMovieList.fulfilled,(state,action) => {
            if(state.topRatedMovie.page != 1){
                state.topRatedMovie.topRatedMovieList = state.topRatedMovie.topRatedMovieList.concat(action.payload)
            }
        })
    }
});


export default MovieListSlice.reducer;
export const {setPopularPage,setUpComingPage,setTrendingPage,setTopRatedPage} = MovieListSlice.actions; 