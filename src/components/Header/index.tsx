import {BsCart3} from 'react-icons/bs'
import {Header_Container,HeaderItem,HeaderItems,HeaderTitle} from './header.styles'

import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'


const Header = ()=>{
  const navigate = useNavigate()

  const {isAuthenticated} = useContext(UserContext)

  const handleLoginClick = (page:string)=>{
    navigate(page)
  }


  return (
    <Header_Container>
      <HeaderTitle onClick={()=>handleLoginClick('/')}>E-MattClothing</HeaderTitle>

      <HeaderItems>
        <HeaderItem>
          Explorar
        </HeaderItem>
        {!isAuthenticated ? (
          <>
            <HeaderItem onClick={()=>handleLoginClick('/login')}>Login</HeaderItem>
            <HeaderItem onClick={()=>handleLoginClick('/singup')}>Criar Conta</HeaderItem>
          </>
        )
        :(<HeaderItem onClick={()=> signOut(auth)}>Sair</HeaderItem>)
      }
        <HeaderItem>
          <BsCart3 size={25}/>
          <p>5</p>
        </HeaderItem>
      </HeaderItems>
    </Header_Container>
  )
}

export default Header