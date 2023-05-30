import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const appendTopRatedMovieList =  createAsyncThunk('TopRatedMovieList/appendTopRatedMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})
export default appendTopRatedMovieList;