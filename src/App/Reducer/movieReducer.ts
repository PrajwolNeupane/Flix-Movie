import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPopularMovieList = createAsyncThunk('PopularMovieList/getPopularMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendPopularMovieList =  createAsyncThunk('PopularMovieList/appendPopularMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

export const getTopRatedMovieList = createAsyncThunk('TopRatedMovieList/getTopRatedMovieList',async()=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendTopRatedMovieList =  createAsyncThunk('TopRatedMovieList/appendTopRatedMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
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
        const response = await axios(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
    }catch(error){
        console.log(error);
    }
})

export const appendTrendingMovieList =  createAsyncThunk('TrendingMovieList/appendTrendingMovieList',async(page:number)=>{
    try{
        const response = await axios(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data.results
       
    }catch(error){
        console.log(error);
    }
})

