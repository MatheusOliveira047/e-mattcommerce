import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import {useForm } from 'react-hook-form'

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
  const {register, formState: {errors}, handleSubmit} = useForm()

  const handleSubmitPress = (data:any)=>{
    console.log({data})
  }


  return(
    <>
    <LoginContainer>
      <LoginContent>
        <LoginHeadline> Entre com a sua conta </LoginHeadline>
        <CustomButton startIcon={<BsGoogle size={18}/>}> Entrar com o Google </CustomButton>
        <LoginSubtitle> ou entre com o seu e-mail</LoginSubtitle>

        <LoginInputContainer>
          <p>E-mail</p>
          <CustomInput 
            hasError={!!errors?.email}
            {...register('email',{required:true})} 
            placeholder='Digite seu e-mail' 
            type='email'/>
        </LoginInputContainer>

        <LoginInputContainer>
          <p>Senha</p>          
          <CustomInput 
            hasError={!!errors?.password}
            {...register('password',{required:true})}  
            placeholder='Digite sua senha' 
            type='password'/>
        </LoginInputContainer>

        <CustomButton onClick={()=>handleSubmit(handleSubmitPress)()} startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
      
      </LoginContent>
    </LoginContainer>
    </>
  )
}

export default LoginPage 