import {FunctionComponent} from 'react'
import {LoadingContainer} from './loading.styled'
import { FadeLoader } from 'react-spinners'

interface LoadingProps {
  message?:string
}

const Loading: FunctionComponent<LoadingProps> = ({message})=>{
  return(
    <LoadingContainer>
      <FadeLoader color='#212529'/>
      {message && <p>{message}</p>}
    </LoadingContainer>
  )
}

export default Loading