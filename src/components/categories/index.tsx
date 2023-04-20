import { useEffect } from 'react'
import { useContext } from 'react'

import CategoryItem from '../category-item'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../Loading'
import {CategoriesContainer,CategoriesContent} from './categories.styled'

const Categories = ()=>{
  const {fetchCategories, categories,isLoading} = useContext(CategoryContext)

  useEffect(()=>{
    fetchCategories()
  },[])

  return(
    <CategoriesContainer>
      {isLoading && <Loading/>}
      <CategoriesContent>
        {categories.map(category => (
          <div>
          <CategoryItem category={category}/>
          </div>
        
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories