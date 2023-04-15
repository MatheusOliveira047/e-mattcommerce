import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import './category-item.css'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category})=>{
  return(
    <div className="category-item-container" style={{backgroundImage:`url(${category.imageUrl})`}}>
      <div className="category-name">
        {category.displayName}
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem