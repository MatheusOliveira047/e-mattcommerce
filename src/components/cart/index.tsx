import { FunctionComponent, useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs'

import {CartContainer,CartContent,CartEscapeArea,CartTitle,CartTotal} from './cart.styled'
import CustomButton from '../Custom-Button'
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = ()=>{
  const {isVisible, toggleCart} = useContext(CartContext)

  return(
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}/>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        
        <CartTotal>Total: R$ 999</CartTotal>
        <CustomButton startIcon={<BsCartCheck/>}> Ir para o chekout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart