import { FunctionComponent, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AiOutlineCheckCircle,AiOutlineCloseCircle, AiOutlineHome} from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import CustomButton from '../../components/Custom-Button'
5
import { clearProducts } from '../../store/reducers/cart/cart.actions'

import {PaymentConfirmationContainer,PaymentConfirmationContent} from './payment-confirmation.styled'
import Colors from '../../theme/theme.colors'

const PaymentConfirmationPage: FunctionComponent = ()=>{
  const [searchParams] = useSearchParams()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleHome = ()=>{
    navigate('/')
  }

  useEffect(()=>{
    if(status === 'true'){
      dispatch(clearProducts())
    }
  },[status])

  return(
    <PaymentConfirmationContainer>
      <PaymentConfirmationContent>
        

        {status === 'true' && (
          <>
          
          <p>Sua compra foi finalizada com sucesso!</p>
          <AiOutlineCheckCircle size={120} color={Colors.sucess}/>
          </>
        )}

        {(status === 'false' || isCanceled) && (
          <>
            <p>Ocorreu um erro ao finalizar sua compra. Por favor tente novamente.</p>
            <AiOutlineCloseCircle size={120} color={Colors.error}/>
          </>
        )}

        <CustomButton onClick={handleHome} startIcon={<AiOutlineHome/>}>Ir para a Página Inicial</CustomButton>
      </PaymentConfirmationContent>
    </PaymentConfirmationContainer>
  )
}

export default PaymentConfirmationPage