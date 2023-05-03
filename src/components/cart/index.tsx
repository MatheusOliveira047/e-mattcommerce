import { FunctionComponent } from 'react'
import {BsCartCheck} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CustomButton from '../Custom-Button'
import CartItem from '../cart-item'

import { useAppSelector } from '../../hooks/redux,hooks'
//import { cartToggle } from '../../store/reducers/cart/cart.actions'
import { toggle } from '../../store/toolkit/cart/cart.slice'
import { selectProductsCount, selectProductsTotalPrice } from '../../store/reducers/cart/cart.selectors'

import {CartContainer,CartContent,CartEscapeArea,CartTitle,CartTotal} from './cart.styled'

const Cart: FunctionComponent = ()=>{

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selectProductsCount)

  const {isVisible,products} = useAppSelector((rootReducer) => rootReducer.cartReducer)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const toggleCart = ()=>{
    dispatch(toggle())
  }

  const handleChekout = ()=>{
    dispatch(toggle())
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
          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
          <CustomButton onClick={handleChekout} startIcon={<BsCartCheck/>}> Ir para o chekout</CustomButton>
        </>)}
      </CartContent>
    </CartContainer>
  )
}

export default Cart