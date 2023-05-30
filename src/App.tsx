import { lazy,Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LayOut from './Component/Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import appendPopularMovieList from './App/Reducer/appendPopularMovieList';
import getPopularMovieList from './App/Reducer/getPopularMovieList';
import { useDispatch,useSelector } from 'react-redux';
import {useEffect} from 'react';

//Lazy Import
const SignupPage = lazy(() => import('./Page/SignupPage'));
const LoginPage = lazy(() => import('./Page/LoginPage'));

function App() {

  const dispatch = useDispatch<any>();


  useEffect(() => {
    dispatch(getPopularMovieList());
    dispatch(appendPopularMovieList(1));
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<HomePage />}/>
      <Route path='/movie' element={<MoviePage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      </Route>
     <Route path='/log-in' element={ <Suspense fallback="Loading..."><LoginPage /></Suspense>}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
    </Routes>
  )
}

export default App
