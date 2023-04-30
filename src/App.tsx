import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Header from './components/Header';
import './App.css'
import SingUpPage from './pages/Sing-up';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './config/firebase.config';
import { FunctionComponent, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { userConverter } from './converters/firestore.converters';
import Loading from './components/Loading';
import ExplorePage from './pages/Explore/index.page';
import CategoryDetailsPage from './pages/Category-Details';
import Cart from './components/cart';
import ChekoutPage from './pages/Checkout';
import AuthenticationGuard from './guards/authenticaion.guard';
import PaymentConfirmationPage from './pages/Payment-confirmation';
import { useDispatch, useSelector } from 'react-redux';


const App: FunctionComponent  = ()=>{
  const [isInitializing,setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const {isAuthenticated} = useSelector((rootReducer:any)=> rootReducer.userReducer)

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      const isSigningOut = isAuthenticated && !user
  
      if(isSigningOut){
        dispatch({type:'LOGOUT_USER'})
  
        return setIsInitializing(false) 
      }
  
      const isSigningIn = !isAuthenticated && user
      if(isSigningIn){
        const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))
        const userFromFirestore = querySnapshot.docs[0]?.data()
  
        dispatch({type:"LOGIN_USER", payload: userFromFirestore})
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