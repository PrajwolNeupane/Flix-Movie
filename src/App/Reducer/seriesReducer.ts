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

export const getUpComingSeriesList = createAsyncThunk('UpComingSeriesList/getUpComingSeriesList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendUpComingSeriesList =  createAsyncThunk('UpComingSeriesList/appendUpComingSeriesList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

export  const getTrendingSeriesList = createAsyncThunk('TrendingSeriesList/getTrendingSeriesList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendTrendingSeriesList =  createAsyncThunk('TrendingSeriesList/appendTrendingSeriesList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

