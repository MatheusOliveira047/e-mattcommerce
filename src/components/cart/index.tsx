import { FunctionComponent, useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs'

import {CartContainer,CartContent,CartEscapeArea,CartTitle,CartTotal} from './cart.styled'
import CustomButton from '../Custom-Button'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item'
import { useNavigate } from 'react-router-dom'

const Cart: FunctionComponent = ()=>{
  const {isVisible, toggleCart, products,productsPrice,productsCount} = useContext(CartContext)

  const navigate = useNavigate()

  const handleChekout = ()=>{
    toggleCart()
    navigate('/chekout')
  }

  return(
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}/>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        
        {products.map(product=>(
          <CartItem key={product.id} product={product}/>
        ))}

        {productsCount === 0 
        ? (<p>Seu Carrinho está vazio</p>) 
        : (
        <>
          <CartTotal>Total: R$ {productsPrice}</CartTotal>
          <CustomButton onClick={handleChekout} startIcon={<BsCartCheck/>}> Ir para o chekout</CustomButton>
        </>)}
      </CartContent>
    </CartContainer>
  )
}

export default Cart