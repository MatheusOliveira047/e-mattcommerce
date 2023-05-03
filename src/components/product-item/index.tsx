import { FunctionComponent, useContext } from 'react'

import {ProductContainer,ProductImage,ProductInfo} from './product-item.styled'

import {BsCartPlus} from 'react-icons/bs'
import Product from '../../types/product.types'
import CustomButton from '../Custom-Button'
import { useDispatch } from 'react-redux'
//import { addProductToCart } from '../../store/reducers/cart/cart.actions'
import { add_product_to_cart } from '../../store/toolkit/cart/cart.slice'
interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product})=>{

  const dispatch = useDispatch()

  const handleAddToCartClick = ()=>{
    dispatch(add_product_to_cart(product))
  }

  return(
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} about={product.name}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus/>}>Adicionar ao Carrinho</CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem