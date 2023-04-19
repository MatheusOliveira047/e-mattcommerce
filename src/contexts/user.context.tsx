import React, {FunctionComponent, createContext, useState} from 'react'
import User from '../types/user.types'

interface IUserContext{
  currentUser:User | null
  isAuthenticated:boolean
  loginUser : (user:User) => void
  logoutUser : () => void

}

export const UserContext = createContext<IUserContext>({
  currentUser:null,
  isAuthenticated:false,
  loginUser: ()=>{},
  logoutUser:()=>{}
})

interface userContextProviderProps {
  children: React.ReactNode
}

const UserContextProvider: FunctionComponent<userContextProviderProps>=({children})=>{
  const [currentUser,setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User)=>{
    setCurrentUser(user)
  }

  const logoutUser = ()=>{
    setCurrentUser(null)
  }

  return <UserContext.Provider value={{currentUser,isAuthenticated, loginUser,logoutUser}}>
    {children}
  </UserContext.Provider>
}

export default UserContextProvider