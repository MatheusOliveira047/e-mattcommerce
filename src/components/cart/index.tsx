import { FunctionComponent, useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs'

import {CartContainer,CartContent,CartEscapeArea,CartTitle,CartTotal} from './cart.styled'
import CustomButton from '../Custom-Button'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item'

const Cart: FunctionComponent = ()=>{
  const {isVisible, toggleCart, products,productsPrice} = useContext(CartContext)

  return(
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}/>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        
        {products.map(product=>(
          <CartItem key={product.id} product={product}/>
        ))}

        <CartTotal>Total: R$ {productsPrice}</CartTotal>
        <CustomButton startIcon={<BsCartCheck/>}> Ir para o chekout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart