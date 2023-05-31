import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LayOut from './Component/Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import ProtectiveRoute from './Component/Layout/ProtectiveRoute';
import { useAppDispatch, useAppSelector } from './App/store';
import { useEffect } from 'react';
import {appendPopularMovieList,getUpComingMovieList,getTrendingMovieList,getPopularMovieList,getTopRatedMovieList, appendTopRatedMovieList, appendUpComingMovieList, appendTrendingMovieList,} from './App/Reducer/movieReducer.ts';
import TVSeriesPage from './Page/TVSeriesPage';

//Lazy Import
const SignupPage = lazy(() => import('./Page/SignupPage'));
const LoginPage = lazy(() => import('./Page/LoginPage'));

function App() {

  const dispatch = useAppDispatch();
  const popularPage = useAppSelector((state) => state.movieList.popularMovie.page);
  const upComingPage = useAppSelector((state) => state.movieList.upComingMovie.page);
  const trendingPage = useAppSelector((state) => state.movieList.trendingMovie.page);
  const topRatedPage = useAppSelector((state) => state.movieList.topRatedMovie.page);


  useEffect(() => {
    dispatch(getPopularMovieList());
    dispatch(getUpComingMovieList());
    dispatch(getTrendingMovieList());
    dispatch(getTopRatedMovieList())
  }, [dispatch]);

  useEffect(() => {
    if (popularPage != 1) {
      dispatch(appendPopularMovieList(popularPage));
    }
  }, [popularPage]);

  useEffect(() => {
    if (trendingPage != 1) {
      dispatch(appendTrendingMovieList(trendingPage));
    }
  }, [trendingPage]);

  useEffect(() => {
    if (upComingPage != 1) {
      dispatch(appendUpComingMovieList(upComingPage));
    }
  }, [upComingPage]);

  useEffect(() => {
    if (topRatedPage != 1) {
      dispatch(appendTopRatedMovieList(topRatedPage));
    }
  }, [topRatedPage]);


  return (
    <Routes>
      <Route path='/' element={<ProtectiveRoute/>}>
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='/movie' element={<MoviePage />} />
          <Route path='/series' element={<TVSeriesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
        <Route path='/log-in' element={<Suspense fallback="Loading..."><LoginPage /></Suspense>} />
        <Route path='/sign-up' element={<Suspense fallback="Loading..."><SignupPage /></Suspense>} />
      </Route>
    </Routes>
  )
}

export default App
