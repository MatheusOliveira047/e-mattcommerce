import { FunctionComponent } from 'react'
import Category from '../../types/category.types'

import {CategoryItemContainer,CategoryName} from './category.styled'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category})=>{
  return(
    <CategoryItemContainer style={{backgroundImage:`url(${category.imageUrl})`}}>
      <CategoryName>
        {category.displayName}
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem