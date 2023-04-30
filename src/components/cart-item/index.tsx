import { FunctionComponent, useContext } from 'react'
import {CartItemContainer,CartItemImage,CartItemInfo,CartItemQuantity,RemoveButton} from './cart-item.styled'
import CartProduct from '../../types/cart.types'
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose} from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { increaseProductQuantity, removeProductFromCart, subtractProductQuantity } from '../../store/reducers/cart/cart.actions'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({product})=>{
  


  const dispatch = useDispatch()

  const handleRemoveClick = ()=>{
    dispatch(removeProductFromCart(product.id))
  }
  const handleAddQuantityProduct = ()=>{
    dispatch(increaseProductQuantity(product.id))
  }
  const handleSubQuantityProduct = ()=>{
    dispatch(subtractProductQuantity(product.id))
  }

  return(
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl}/>

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p> 

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleSubQuantityProduct}/>
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleAddQuantityProduct}/>
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25}/>
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem