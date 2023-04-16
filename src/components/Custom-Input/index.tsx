import {FunctionComponent, InputHTMLAttributes} from 'react'
import {CustomInputContainer} from './CustomInput.styled'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({hasError,...rest})=>{
  return(
    <CustomInputContainer hasError={hasError} {...rest}/>
  )
}

export default CustomInput