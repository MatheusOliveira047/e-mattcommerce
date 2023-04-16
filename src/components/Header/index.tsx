import {BsCart3} from 'react-icons/bs'
import {Header_Container,HeaderItem,HeaderItems,HeaderTitle} from './header.styles'

import { useNavigate } from 'react-router-dom'


const Header = ()=>{
  const navigate = useNavigate()

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
        <HeaderItem onClick={()=>handleLoginClick('/login')}>
         Login
        </HeaderItem>
        <HeaderItem>
          Criar Conta
        </HeaderItem>
        <HeaderItem>
          <BsCart3 size={25}/>
          <p style={{marginLeft:5}}>5</p>
        </HeaderItem>
      </HeaderItems>
    </Header_Container>
  )
}

export default Header