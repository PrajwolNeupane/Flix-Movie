import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const getTrendingMovieList = createAsyncThunk('TrendingMovieList/getTrendingMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})
export default getTrendingMovieList;