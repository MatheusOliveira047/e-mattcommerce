import { FunctionComponent, useContext } from 'react'

import {ProductContainer,ProductImage,ProductInfo} from './product-item.styled'

import {BsCartPlus} from 'react-icons/bs'
import Product from '../../types/product.types'
import CustomButton from '../Custom-Button'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product})=>{
  const {addProductToCart} = useContext(CartContext)

  const handleAddToCartClick = ()=>{
    addProductToCart(product)
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