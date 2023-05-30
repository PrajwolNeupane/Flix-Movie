import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const getUpComingMovieList = createAsyncThunk('UpComingMovieList/getUpComingMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})
export default getUpComingMovieList;