import { lazy,Suspense } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes,Route } from 'react-router-dom';
const SignupPage = lazy(() => import('./Page/SignupPage'));


function App() {

  return (
    <Routes>
      <Route index element={<h1>Home</h1>}/>
     <Route path='/log-in' element={ <LoginPage />}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
    </Routes>
  )
}

export default App
