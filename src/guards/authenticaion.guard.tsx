import React, { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux,hooks';

import Loading from '../components/Loading';
interface AuthenticationProps {
  children: React.ReactNode
}

const AuthenticationGuard:FunctionComponent<AuthenticationProps> = ({children})=>{
  const {isAuthenticated} = useAppSelector((rootReducer) => rootReducer.userReducer)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!isAuthenticated){
      setTimeout(()=>{
        navigate('/login')
      },3000)
    }
  },[isAuthenticated])

  if(!isAuthenticated) {
    return (
      <>
       <Loading message='Você precisa estar logado para acessar esta página. Você será redicionado para a página de login'/>
      </>
    )
  }
  
  return (
    <>
      {children}
    </>
  )
}

export default AuthenticationGuard