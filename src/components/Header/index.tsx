import {BsCart3} from 'react-icons/bs'
import {Header_Container,HeaderItem,HeaderItems,HeaderTitle} from './header.styles'


const Header = ()=>{
  return (
    <Header_Container>
      <HeaderTitle>E-MattClothing</HeaderTitle>

      <HeaderItems>
        <HeaderItem>
          Explorar</HeaderItem>
        <HeaderItem>
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