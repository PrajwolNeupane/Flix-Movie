import { lazy,Suspense } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LayOut from './Component/Layout/Layout';
import ContactPage from './Page/ContactPage';
const SignupPage = lazy(() => import('./Page/SignupPage'));


function App() {

  return (
    <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<HomePage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      </Route>
     <Route path='/log-in' element={ <LoginPage />}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
    </Routes>
  )
}

export default App
