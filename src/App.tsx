import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Header from './components/Header';
import './App.css'
import SingUpPage from './pages/Sing-up';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase.config';


const App  = ()=>{
  onAuthStateChanged(auth,(user)=>{
    console.log(user)
  })
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/singup' element={<SingUpPage/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App