import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Header from './components/Header';
import './App.css'
import SingUpPage from './pages/Sing-up';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './config/firebase.config';
import { FunctionComponent, useContext } from 'react';
import { UserContext } from './contexts/user.context';
import { collection, getDocs, query, where } from 'firebase/firestore';


const App: FunctionComponent  = ()=>{


  const {currentUser,loginUser,isAuthenticated,logoutUser} = useContext(UserContext)


  onAuthStateChanged(auth, async (user)=>{
    const isSigningOut = isAuthenticated && !user

    if(isSigningOut){
      return logoutUser()
    }

    const isSigningIn = !isAuthenticated && user
    if(isSigningIn){
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
      const userFromFirestore = querySnapshot.docs[0]?.data()

      return loginUser(userFromFirestore as any)
    }
  })
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