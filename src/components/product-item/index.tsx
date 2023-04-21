import { FunctionComponent } from 'react'

import {ProductContainer,ProductImage,ProductInfo} from './product-item.styled'

import Product from '../../types/product.types'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({product})=>{
  return(
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} about={product.name}/>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem