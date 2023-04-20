import { FunctionComponent, useContext } from 'react'
import {CategoryContainer,CategoryTitle,ProductsContainer} from './category-overview.styled'
import Category from '../../types/category.types'
import ProductItem from '../product-item'
import { UserContext } from '../../contexts/user.context'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../Loading'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({category})=>{
 const {isLoading} = useContext(CategoryContext)

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