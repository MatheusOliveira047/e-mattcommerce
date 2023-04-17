import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import {useForm } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

import CustomButton from '../../components/Custom-Button'

import { 
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styled'
import CustomInput from '../../components/Custom-Input'
import InputErrorMessage from '../../components/input-error-message'

interface LoginForm {
  email:string
  password:string
}

const LoginPage = ()=>{
  const {register, formState: {errors}, handleSubmit} = useForm<LoginForm>()

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
            {...register('email',
            {required:true, validate:(value)=>isEmail(value)},)} 
            placeholder='Digite seu e-mail' 
            type='email'/>
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O E-mail é obrigatório.</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Por favor, insira um e-mail válido</InputErrorMessage>
            )}
        </LoginInputContainer>

        <LoginInputContainer>
          <p>Senha</p>          
          <CustomInput 
            hasError={!!errors?.password}
            {...register('password',{required:true, minLength:6})}  
            placeholder='Digite sua senha' 
            type='password'/>
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>A senha precisa ter pelo menos 6 caracteres.</InputErrorMessage>
            )}
        </LoginInputContainer>

        <CustomButton onClick={()=>handleSubmit(handleSubmitPress)()} startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
      
      </LoginContent>
    </LoginContainer>
    </>
  )
}

export default LoginPage 