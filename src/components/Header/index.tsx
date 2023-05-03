import {BsCart3} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/toolkit/user/user.slice'
import { useAppSelector } from '../../hooks/redux,hooks'
//import { cartToggle } from '../../store/reducers/cart/cart.actions'
import { selectProductsCount } from '../../store/reducers/cart/cart.selectors'
import { toggle } from '../../store/toolkit/cart/cart.slice'

import {Header_Container,HeaderItem,HeaderItems,HeaderTitle} from './header.styles'

const Header = ()=>{
  const navigate = useNavigate()

  const {isAuthenticated} = useAppSelector((rootReducer) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const productsCount = useAppSelector(selectProductsCount)


  const toggleCart = ()=>{
    dispatch(toggle())
  }

  const handleLoginClick = (page:string)=>{
    navigate(page)
  }

  const handleSingOut = ()=>{
    dispatch(logoutUser())
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