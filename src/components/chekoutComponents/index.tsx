import { FunctionComponent, useContext } from 'react'
import {CheckoutContainer,CheckoutProducts,CheckoutTitle,CheckoutTotal} from './chekout.styled'
import { CartContext } from '../../contexts/cart.context'
import CustomButton from '../Custom-Button'
import {BsBagCheck} from 'react-icons/bs'
import CartItem from '../cart-item'

const ChekoutComponent: FunctionComponent = ()=>{
  const {products,productsPrice} = useContext(CartContext)

  

  return(
    <CheckoutContainer>
      <CheckoutTitle>Chekout</CheckoutTitle>
      {products.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ):(
        <>
        <CheckoutProducts>
        {products.map(product=>(
          <CartItem key={product.id} product={product}/>
        ))}
      </CheckoutProducts>
      <CheckoutTotal>R$ {productsPrice}</CheckoutTotal>
      <CustomButton startIcon={<BsBagCheck/>}>Finalizar Compra</CustomButton>
        </>
      )}

    </CheckoutContainer>
  )
}

export default ChekoutComponent