import {BsCart3} from 'react-icons/bs'
import {Header_Container,HeaderItem,HeaderItems,HeaderTitle} from './header.styles'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'


const Header = ()=>{
  const navigate = useNavigate()

  const {isAuthenticated} = useSelector((rootReducer:any) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const {toggleCart,productsCount} = useContext(CartContext)

  const handleLoginClick = (page:string)=>{
    navigate(page)
  }

  const handleSingOut = ()=>{
    dispatch({type:'LOGOUT_USER'})
    signOut(auth)
  }


  return (
    <Header_Container>
      <HeaderTitle onClick={()=>handleLoginClick('/')}>E-MattClothing</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={()=> handleLoginClick('/explore')}>
          Explorar
        </HeaderItem>
        {!isAuthenticated ? (
          <>
            <HeaderItem onClick={()=>handleLoginClick('/login')}>Login</HeaderItem>
            <HeaderItem onClick={()=>handleLoginClick('/singup')}>Criar Conta</HeaderItem>
          </>
        )
        :(<HeaderItem onClick={handleSingOut}>Sair</HeaderItem>)
      }
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25}/>
          <p>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </Header_Container>
  )
}

export default Header