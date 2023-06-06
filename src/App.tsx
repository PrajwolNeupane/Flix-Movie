import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LayOut from './Component/Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import ProtectiveRoute from './Component/Layout/ProtectiveRoute';
import { useAppDispatch, useAppSelector } from './App/store';
import { useEffect } from 'react';
import {appendPopularMovieList,getUpComingMovieList,getTrendingMovieList,getPopularMovieList,getTopRatedMovieList, appendTopRatedMovieList, appendUpComingMovieList, appendTrendingMovieList,} from './App/Reducer/movieReducer.ts';
import TVSeriesPage from './Page/TVSeriesPage';
import { getPopularSeriesList ,appendPopularSeriesList, getTopRatedSeriesList, appendTrendingSeriesList, getTrendingSeriesList, getUpComingSeriesList,appendUpComingSeriesList} from './App/Reducer/seriesReducer.ts';
import SingleMoviePage from './Page/SingleMoviePage.tsx';
import SingleTVPage from './Page/SingleTVPage.tsx';
import GenrePage from './Page/GenrePage.tsx';
import ProfilePage from './Page/ProfilePage.tsx';

//Lazy Import
const SignupPage = lazy(() => import('./Page/SignupPage'));
const LoginPage = lazy(() => import('./Page/LoginPage'));

function App() {

  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  //Movie Page
  const popularMoviePage = useAppSelector((state) => state.movieList.popularMovie.page);
  const upComingMoviePage = useAppSelector((state) => state.movieList.upComingMovie.page);
  const trendingMoviePage = useAppSelector((state) => state.movieList.trendingMovie.page);
  const topRatedMoviePage = useAppSelector((state) => state.movieList.topRatedMovie.page);

  //Series Page
  const popularSeriesPage = useAppSelector((state) => state.seriesList.popularSeries.page);
  const topRatedSeriesPage = useAppSelector((state) => state.seriesList.topRatedSeries.page);
  const trendingSeriesPage = useAppSelector((state) => state.seriesList.trendingSeries.page);
  const upComingSeriesPage = useAppSelector((state) => state.seriesList.upComingSeries.page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getPopularMovieList());
    dispatch(getUpComingMovieList());
    dispatch(getTrendingMovieList());
    dispatch(getTopRatedMovieList())
    dispatch(getPopularSeriesList());
    dispatch(getTopRatedSeriesList());
    dispatch(getTrendingSeriesList());
    dispatch(getUpComingSeriesList());
  }, [dispatch]);

  useEffect(() => {
    if (popularMoviePage != 1) {
      dispatch(appendPopularMovieList(popularMoviePage));
    }
  }, [popularMoviePage]);

  useEffect(() => {
    if (trendingMoviePage != 1) {
      dispatch(appendTrendingMovieList(trendingMoviePage));
    }
  }, [trendingMoviePage]);

  useEffect(() => {
    if (upComingMoviePage != 1) {
      dispatch(appendUpComingMovieList(upComingMoviePage));
    }
  }, [upComingMoviePage]);

  useEffect(() => {
    if (topRatedMoviePage != 1) {
      dispatch(appendTopRatedMovieList(topRatedMoviePage));
    }
  }, [topRatedMoviePage]);

  useEffect(() => {
    if(popularSeriesPage != 1){
      dispatch(appendPopularSeriesList(popularSeriesPage));
    }
  }, [popularSeriesPage]);

  useEffect(() => {
    if(topRatedSeriesPage != 1){
      dispatch(appendTopRatedMovieList(topRatedSeriesPage));
    }
  }, [topRatedSeriesPage]);

  useEffect(() => {
    if(trendingSeriesPage != 1){
      dispatch(appendTrendingSeriesList(trendingSeriesPage));
    }
  }, [trendingSeriesPage]);

  useEffect(() => {
    if(upComingSeriesPage != 1){
      dispatch(appendUpComingSeriesList(upComingSeriesPage +1 ));
    }
  }, [upComingSeriesPage]);


  return (
    <Routes>
      <Route path='/' element={<ProtectiveRoute/>}>
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='/movie' element={<MoviePage />} />
          <Route path='/series' element={<TVSeriesPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/movie/:id' element={<SingleMoviePage />}/>
          <Route path='/series/:id' element={<SingleTVPage />}/>
          <Route path='/genre/:id' element={<GenrePage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
        <Route path='/log-in' element={<Suspense fallback="Loading..."><LoginPage /></Suspense>} />
        <Route path='/sign-up' element={<Suspense fallback="Loading..."><SignupPage /></Suspense>} />
      </Route>
    </Routes>
  )
}

export default App;
