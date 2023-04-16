import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'

import CustomButton from '../../components/Custom-Button'

import { 
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styled'
import CustomInput from '../../components/Custom-Input'



const LoginPage = ()=>{
  return(
    <>
    <LoginContainer>
      <LoginContent>
        <LoginHeadline> Entre com a sua conta </LoginHeadline>
        <CustomButton startIcon={<BsGoogle size={18}/>}> Entrar com o Google </CustomButton>
        <LoginSubtitle> ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>
          <CustomInput placeholder='Digite seu e-mail' type='email'/>
        </LoginInputContainer>
        <LoginInputContainer>          
          <CustomInput placeholder='Digite sua senha' type='password'/>
        </LoginInputContainer>
        <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
      </LoginContent>
    </LoginContainer>
    </>
  )
}

export default LoginPage 