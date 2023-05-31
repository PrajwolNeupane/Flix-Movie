import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPopularSeriesList = createAsyncThunk('PopularSeriesList/getPopularSeriesList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendPopularSeriesList =  createAsyncThunk('PopularSeriesList/appendPopularSeriesList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

export const getTopRatedSeriesList = createAsyncThunk('TopRatedSeriesList/getTopRatedSeriesList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendTopRatedSeriesList =  createAsyncThunk('TopRatedSeriesList/appendTopRatedSeriesList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

export const getUpComingMovieList = createAsyncThunk('UpComingMovieList/getUpComingMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendUpComingMovieList =  createAsyncThunk('UpComingMovieList/appendUpComingMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

export  const getTrendingMovieList = createAsyncThunk('TrendingMovieList/getTrendingMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendTrendingMovieList =  createAsyncThunk('TrendingMovieList/appendTrendingMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

