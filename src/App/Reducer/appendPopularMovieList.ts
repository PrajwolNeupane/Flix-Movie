import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const appendPopularMovieList =  createAsyncThunk('PopularMovieList/appendPopularMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})
export default appendPopularMovieList;