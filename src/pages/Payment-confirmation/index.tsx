import { FunctionComponent, useContext, useEffect } from 'react'
import {PaymentConfirmationContainer,PaymentConfirmationContent} from './payment-confirmation.styled'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { AiOutlineCheckCircle,AiOutlineCloseCircle, AiOutlineHome} from 'react-icons/ai'
import Colors from '../../theme/theme.colors'
import CustomButton from '../../components/Custom-Button'
import { CartContext } from '../../contexts/cart.context'

const PaymentConfirmationPage: FunctionComponent = ()=>{
  const [searchParams] = useSearchParams()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled')
  const navigate = useNavigate()

  const {clearProducts} = useContext(CartContext)

  const handleHome = ()=>{
    navigate('/')
  }

  useEffect(()=>{
    if(status === 'true'){
      clearProducts()
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