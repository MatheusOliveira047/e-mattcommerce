import { FunctionComponent, useState } from 'react'
import axios from 'axios'
import {BsBagCheck} from 'react-icons/bs'

import CustomButton from '../Custom-Button'
import CartItem from '../cart-item'
import Loading from '../Loading'

import { useAppSelector } from '../../hooks/redux,hooks'
import { selectProductsTotalPrice } from '../../store/reducers/cart/cart.selectors'

import {CheckoutContainer,CheckoutProducts,CheckoutTitle,CheckoutTotal} from './chekout.styled'

const ChekoutComponent: FunctionComponent = ()=>{
  const {products} = useAppSelector((rootReducer)=> rootReducer.cartReducer)

  const productsPrice = useAppSelector(selectProductsTotalPrice)

  const [isLoading,setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async()=>{
    try {
      setIsLoading(true)
      
     const {data} = await axios.post(`http://localhost:5050/create-checkout-session`,{products})

     window.location.href = data.url

    } catch (error) {
      
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  return(
    <>
      {isLoading && <Loading />}
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
      <CustomButton onClick={handleFinishPurchaseClick} startIcon={<BsBagCheck/>}>Finalizar Compra</CustomButton>
        </>
      )}

    </CheckoutContainer>
    </>
  )
}

export default ChekoutComponent