import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase.config'
import { AuthError, createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth'
import isEmail from 'validator/lib/isEmail'
import { FiLogIn } from 'react-icons/fi'
import {useForm} from 'react-hook-form'

import CustomButton from '../../components/Custom-Button'
import CustomInput from '../../components/Custom-Input'
import InputErrorMessage from '../../components/input-error-message'
import {useState} from 'react'

import {SignUpContainer,SignUpContent,SignUpHeadline,SignUpInputContainer} from './sing-up.styled'
import Loading from '../../components/Loading'
interface SingUpForm {
  firstName:string
  lastName:string
  email:string
  password:string
  confirmPassword: string
}

const SingUpPage = ()=>{
  const [isLoading,setIsLoading] = useState(false)
  const {register,formState:{errors},handleSubmit, watch, setError} = useForm<SingUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress =  async (data:SingUpForm)=>{
    setIsLoading(true)
    try {
     const usersCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

     await addDoc(collection(db,'users'),{
      id: usersCredentials.user.uid,
      email:usersCredentials.user.email,
      firstName:data.firstName,
      lastName: data.lastName,
      provider: 'firebase'
     })
    } catch (error) {
      console.log({error})
      const _error = error as AuthError

      if(_error.code === AuthErrorCodes.EMAIL_EXISTS){
        return setError('email', {type:'alreadyInUse'})
      }
      
    }finally{
      setIsLoading(false)
    }
  }

  return(
  <>
      {isLoading && <Loading/>}
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
            {errors.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>este email já existe, por favor use outro email.</InputErrorMessage>
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