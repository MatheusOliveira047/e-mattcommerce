import {FunctionComponent} from 'react'
import {LoadingContainer} from './loading.styled'
import { FadeLoader } from 'react-spinners'

const Loading: FunctionComponent = ()=>{
  return(
    <LoadingContainer>
      <FadeLoader color='#212529'/>
    </LoadingContainer>
  )
}

export default Loading