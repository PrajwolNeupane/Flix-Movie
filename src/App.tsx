import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LayOut from './Component/Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import getPopularMovieList from './App/Reducer/getPopularMovieList';
import { useAppDispatch, useAppSelector } from './App/store';
import { useEffect } from 'react';
import appendPopularMovieList from './App/Reducer/appendPopularMovieList';

//Lazy Import
const SignupPage = lazy(() => import('./Page/SignupPage'));
const LoginPage = lazy(() => import('./Page/LoginPage'));

function App() {

  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.movieList.popularMovie);


  useEffect(() => {
    dispatch(getPopularMovieList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(appendPopularMovieList(page));
  }, [page]);


  return (
    <Routes>
      <Route path='/' element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
      <Route path='/log-in' element={<Suspense fallback="Loading..."><LoginPage /></Suspense>} />
      <Route path='/sign-up' element={<Suspense fallback="Loading..."><SignupPage /></Suspense>} />
    </Routes>
  )
}

export default App
