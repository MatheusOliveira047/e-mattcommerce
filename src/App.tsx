import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Header from './components/Header';
import './App.css'
import SingUpPage from './pages/Sing-up';


const App  = ()=>{
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