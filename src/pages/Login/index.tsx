import {BsGoogle} from 'react-icons/bs'
import CustomButton from '../../components/Custom-Button'
import { LoginContainer,LoginContent,LoginHeadline,LoginInputContainer,LoginSubtitle} from './login.styled'



const LoginPage = ()=>{
  return(
    <>
    <LoginContainer>
      <LoginContent>
        <LoginHeadline> Entre com a sua conta </LoginHeadline>
        <CustomButton startIcon={<BsGoogle size={18}/>}> Entrar com o Google </CustomButton>
        <LoginSubtitle> ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>{/** email input*/}</LoginInputContainer>
        <LoginInputContainer>{/** email input*/}</LoginInputContainer>
        {/**Button */}
      </LoginContent>
    </LoginContainer>
    </>
  )
}

export default LoginPage 