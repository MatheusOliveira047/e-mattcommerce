import { FunctionComponent, useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs'

import {CartContainer,CartContent,CartEscapeArea,CartTitle,CartTotal} from './cart.styled'
import CustomButton from '../Custom-Button'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux,hooks'
import { useDispatch } from 'react-redux'
import { cartToggle } from '../../store/reducers/cart/cart.actions'

const Cart: FunctionComponent = ()=>{
  const {productsPrice,productsCount} = useContext(CartContext)

  const {isVisible,products} = useAppSelector((rootReducer) => rootReducer.cartReducer)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const toggleCart = ()=>{
    dispatch(cartToggle())
  }

  const handleChekout = ()=>{
    dispatch(cartToggle())
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