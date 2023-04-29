import { FunctionComponent, useContext, useState } from 'react'
import {CheckoutContainer,CheckoutProducts,CheckoutTitle,CheckoutTotal} from './chekout.styled'
import { CartContext } from '../../contexts/cart.context'
import CustomButton from '../Custom-Button'
import {BsBagCheck} from 'react-icons/bs'
import CartItem from '../cart-item'
import axios from 'axios'
import Loading from '../Loading'

const ChekoutComponent: FunctionComponent = ()=>{
  const {products,productsPrice} = useContext(CartContext)

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