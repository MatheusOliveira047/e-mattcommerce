import { FunctionComponent} from 'react'

import { useAppSelector } from '../../hooks/redux,hooks'
import Category from '../../types/category.types'

import ProductItem from '../product-item'
import Loading from '../Loading'

import {CategoryContainer,CategoryTitle,ProductsContainer} from './category-overview.styled'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({category})=>{
 const {isLoading} = useAppSelector((rootReducer)=> rootReducer.categoryReducer)

  return (
    <>
      {isLoading && <Loading/>}
      <CategoryContainer>
        <CategoryTitle>
          {category.displayName}
        </CategoryTitle>
        <ProductsContainer>
          {category.products.slice(0,4).map(product => <ProductItem product=      {product} key={product.id}/>)}
        </ProductsContainer>
      </CategoryContainer>
    </>
  )
}

export default CategoryOverview