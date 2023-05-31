import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import {Series} from '../Interface/index.ts';
import { getPopularSeriesList,appendPopularSeriesList, getTopRatedSeriesList, appendTopRatedSeriesList } from './Reducer/seriesReducer.ts';

type InitialState = {
    popularSeries:{
        popularSeriesList:Array<Series>,
        page:number
    },
    upComingMovie:{
        upComingMovieList:Array<Series>,
        page:number
    },
    trendingMovie:{
        trendingMovieList:Array<Series>,
        page:number
    },
    topRatedSeries:{
        topRatedSeriesList:Array<Series>,
        page:number
    }
   
}

const initialState:InitialState = {
    popularSeries:{
        popularSeriesList:[],
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
    topRatedSeries:{
        topRatedSeriesList:[],
        page:1
    }
}


const SeriesListSlice = createSlice({
    name:"SeriesList",
    initialState,
    reducers:{
        setPopularPage:(state,action:PayloadAction<any>) => {
            state.popularSeries.page = action.payload
        },
        setUpComingPage:(state,action:PayloadAction<any>) => {
            state.upComingMovie.page = action.payload
        },
        setTrendingPage:(state,action:PayloadAction<any>) => {
            state.trendingMovie.page = action.payload
        },
        setTopRatedPage:(state,action:PayloadAction<any>)=>{
            state.topRatedSeries.page = action.payload
        }
    },
    extraReducers:(builder) => {
        //Builder for Popular Movie List
        builder.addCase(getPopularSeriesList.fulfilled,(state,action) => {
            state.popularSeries.popularSeriesList = action.payload
        })
        builder.addCase(appendPopularSeriesList.fulfilled,(state,action) => {
            if(state.popularSeries.page != 1){
                state.popularSeries.popularSeriesList = state.popularSeries.popularSeriesList.concat(action.payload)
            }
        })
        // //Builder for Up Coming Movie List
        // builder.addCase(getUpComingMovieList.fulfilled,(state,action) => {
        //     state.upComingMovie.upComingMovieList = action.payload
        // })
        // builder.addCase(appendUpComingMovieList.fulfilled,(state,action) => {
        //     if(state.upComingMovie.page != 1){
        //         state.upComingMovie.upComingMovieList = state.upComingMovie.upComingMovieList.concat(action.payload)
        //     }
        // })
        // //Builder for Trending Movie List
        // builder.addCase(getTrendingMovieList.fulfilled,(state,action) => {
        //     state.trendingMovie.trendingMovieList = action.payload
        // })
        // builder.addCase(appendTrendingMovieList.fulfilled,(state,action) => {
        //     if(state.trendingMovie.page != 1){
        //         state.trendingMovie.trendingMovieList = state.trendingMovie.trendingMovieList.concat(action.payload)
        //     }
        // })
        //Builder for Top Rated Movie List
        builder.addCase(getTopRatedSeriesList.fulfilled,(state,action) => {
            state.topRatedSeries.topRatedSeriesList = action.payload
        })
        builder.addCase(appendTopRatedSeriesList.fulfilled,(state,action) => {
            if(state.topRatedSeries.page != 1){
                state.topRatedSeries.topRatedSeriesList = state.topRatedSeries.topRatedSeriesList.concat(action.payload)
            }
        })
    }
});


export default SeriesListSlice.reducer;
export const {setPopularPage,setUpComingPage,setTopRatedPage,setTrendingPage} = SeriesListSlice.actions; 