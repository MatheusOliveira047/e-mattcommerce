import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Header from './components/Header';
import './App.css'
import SingUpPage from './pages/Sing-up';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './config/firebase.config';
import { FunctionComponent, useContext, useState } from 'react';
import { UserContext } from './contexts/user.context';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { userConverter } from './converters/firestore.converters';
import Loading from './components/Loading';


const App: FunctionComponent  = ()=>{
  const [isInitializing,setIsInitializing] = useState(true)

  const {loginUser,isAuthenticated,logoutUser} = useContext(UserContext)


  onAuthStateChanged(auth, async (user)=>{
    const isSigningOut = isAuthenticated && !user

    if(isSigningOut){
      logoutUser()
      return setIsInitializing(false) 
    }

    const isSigningIn = !isAuthenticated && user
    if(isSigningIn){
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))
      const userFromFirestore = querySnapshot.docs[0]?.data()

      loginUser(userFromFirestore)
      return setIsInitializing(false) 
      
    }

    setIsInitializing(false)
  })

  if(isInitializing) return <Loading/>

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={!isAuthenticated ? <LoginPage/> : <Navigate to={'/'}/> } />
        <Route path='/singup' element={!isAuthenticated ? <SingUpPage/> : <Navigate to={'/'}/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App