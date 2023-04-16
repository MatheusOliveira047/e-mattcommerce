import { LoginContainer,LoginContent,LoginHeadline,LoginInputContainer,LoginSubtitle} from './login.styled'

const LoginPage = ()=>{
  return(
    <>
    <LoginContainer>
      <LoginContent>
        <LoginHeadline> Entre com a sua conta </LoginHeadline>
        {/**Button */}
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