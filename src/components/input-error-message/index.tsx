import React, {FunctionComponent} from 'react'

import {InputErrorMessageContainer} from './inputErrorMessage.styled'

interface InputErrorMessageProps {
  children: React.ReactNode
}

const InputErrorMessage:FunctionComponent<InputErrorMessageProps> = ({children})=>{
  return (
    <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
  )
}

export default InputErrorMessage