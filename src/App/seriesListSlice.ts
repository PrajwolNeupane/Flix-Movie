import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import {Series} from '../Interface/index.ts';
import { getPopularSeriesList,appendPopularSeriesList, getTopRatedSeriesList, appendTopRatedSeriesList, getTrendingSeriesList, appendTrendingSeriesList, getUpComingSeriesList, appendUpComingSeriesList } from './Reducer/seriesReducer.ts';

type InitialState = {
    popularSeries:{
        popularSeriesList:Array<Series>,
        page:number
    },
    upComingSeries:{
        upComingSeriesList:Array<Series>,
        page:number
    },
    trendingSeries:{
        trendingSeriesList:Array<Series>,
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
    upComingSeries:{
        upComingSeriesList:[],
        page:1
    },
    trendingSeries:{
        trendingSeriesList:[],
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
            state.upComingSeries.page = action.payload
        },
        setTrendingPage:(state,action:PayloadAction<any>) => {
            state.trendingSeries.page = action.payload
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
        builder.addCase(getUpComingSeriesList.fulfilled,(state,action) => {
            state.upComingSeries.upComingSeriesList = action.payload
        })
        builder.addCase(appendUpComingSeriesList.fulfilled,(state,action) => {
            if(state.upComingSeries.page != 1){
                state.upComingSeries.upComingSeriesList = state.upComingSeries.upComingSeriesList.concat(action.payload)
            }
        })
        // //Builder for Trending Movie List
        builder.addCase(getTrendingSeriesList.fulfilled,(state,action) => {
            state.trendingSeries.trendingSeriesList= action.payload
        })
        builder.addCase(appendTrendingSeriesList.fulfilled,(state,action) => {
            if(state.trendingSeries.page != 1){
                state.trendingSeries.trendingSeriesList = state.trendingSeries.trendingSeriesList.concat(action.payload)
            }
        })
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