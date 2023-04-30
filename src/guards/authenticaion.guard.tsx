import React, { FunctionComponent, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';


interface AuthenticationProps {
  children: React.ReactNode
}

const AuthenticationGuard:FunctionComponent<AuthenticationProps> = ({children})=>{
  const {isAuthenticated} = useSelector((rootReducer: any) => rootReducer.userReducer)
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