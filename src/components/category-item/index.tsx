import { FunctionComponent } from 'react'
import Category from '../../types/category.types'

import {CategoryItemContainer,CategoryName} from './category.styled'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  category: Category
}



const CategoryItem: FunctionComponent<CategoryItemProps> = ({category})=>{
  const navigate = useNavigate()

  const handleExploreClick = (id:string)=>{
    navigate(`/category/${id}`)
  }
  return(
    <CategoryItemContainer backgroundImage={category.imageUrl} >
      <CategoryName onClick={()=>handleExploreClick(category.id)}>
        {category.displayName}
        <p >Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem