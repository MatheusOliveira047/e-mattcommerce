import { useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { FunctionComponent, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from './config/firebase.config';
import { userConverter } from './converters/firestore.converters';
import { loginUser, logoutUser } from './store/toolkit/user/user.slice';
import { useAppSelector } from './hooks/redux,hooks';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import Cart from './components/cart';
import AuthenticationGuard from './guards/authenticaion.guard';

// pages
import SingUpPage from './pages/Sing-up';
import LoginPage from './pages/Login';
import ExplorePage from './pages/Explore/index.page';
import CategoryDetailsPage from './pages/Category-Details';
import ChekoutPage from './pages/Checkout';
import Home from './pages/Home';
import PaymentConfirmationPage from './pages/Payment-confirmation';

//styles
import './App.css'

const App: FunctionComponent  = ()=>{
  const [isInitializing,setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const {isAuthenticated} = useAppSelector((rootReducer)=> rootReducer.userReducer)

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      const isSigningOut = isAuthenticated && !user
  
      if(isSigningOut){
        dispatch(logoutUser())
  
        return setIsInitializing(false) 
      }
  
      const isSigningIn = !isAuthenticated && user
      if(isSigningIn){
        const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))
        const userFromFirestore = querySnapshot.docs[0]?.data()
  
        dispatch(loginUser(userFromFirestore))
        return setIsInitializing(false) 
        
      }
  
      setIsInitializing(false)
    })
  },[dispatch])

  if(isInitializing) return <Loading/>

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<ExplorePage/>} />
        <Route path='/category/:id' element={<CategoryDetailsPage/>} />
        <Route path='/payment-confirmation' element={<PaymentConfirmationPage/>}/>
        <Route path='/chekout' element={<AuthenticationGuard><ChekoutPage /></AuthenticationGuard>}/>


        <Route path='/login' element={!isAuthenticated ? <LoginPage/> : <Navigate to={'/'}/> }/>
        <Route path='/singup' element={!isAuthenticated ? <SingUpPage/> : <Navigate to={'/'}/>} />
      </Routes>
      
      <Cart/>
    </BrowserRouter>
  )
}

export default App