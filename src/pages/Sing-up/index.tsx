import { FiLogIn } from 'react-icons/fi'
import {useForm} from 'react-hook-form'
import {FunctionComponent} from 'react'

import CustomButton from '../../components/Custom-Button'
import CustomInput from '../../components/Custom-Input'
import {SignUpContainer,SignUpContent,SignUpHeadline,SignUpInputContainer} from './sing-up.styled'
import InputErrorMessage from '../../components/input-error-message'
import isEmail from 'validator/lib/isEmail'

interface SingUpForm {
  firstName:string
  lastName:string
  email:string
  password:string
  confirmPassword: string
}

const SingUpPage = ()=>{
  const {register,formState:{errors},handleSubmit, watch} = useForm<SingUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = (data:SingUpForm)=>{
    console.log({data})
  }

  return(
  <>
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput 
            hasError={!!errors?.firstName}
            {...register('firstName',{required:true})}  
            placeholder='Digite seu nome' 
            />
            {errors?.firstName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
            
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput 
            hasError={!!errors?.lastName}
            {...register('lastName',{required:true})}  
            placeholder='Digite seu sobrenome' 
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}

          </SignUpInputContainer>

          <SignUpInputContainer>
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
          </SignUpInputContainer>

          <SignUpInputContainer>
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
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de senha</p>
            <CustomInput 
            type='password' 
            hasError={!!errors?.password}
            {...register('confirmPassword',{required:true, validate:(value)=> { return value === watchPassword}})}
            placeholder='Confirme sua senha'/>
             {errors?.confirmPassword?.type === 'required' && (
              <InputErrorMessage>A confirmação da senha é obrigatória.</InputErrorMessage>
            )}
            {errors?.confirmPassword?.type === 'validate' && (
              <InputErrorMessage>As senhas precisam ser iguais</InputErrorMessage>
            )}

          </SignUpInputContainer>

         
          <CustomButton startIcon={<FiLogIn size={18}/>} onClick={()=>handleSubmit(handleSubmitPress)()}>Criar conta</CustomButton>


        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SingUpPage