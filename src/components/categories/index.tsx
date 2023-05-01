import { useEffect } from 'react'
import { useContext } from 'react'

import CategoryItem from '../category-item'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../Loading'
import {CategoriesContainer,CategoriesContent} from './categories.styled'
import { useDispatch } from 'react-redux'
import { fectchCategories } from '../../store/reducers/category/category.actions'

const Categories = ()=>{
  const {categories,isLoading} = useContext(CategoryContext)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fectchCategories() as any)
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