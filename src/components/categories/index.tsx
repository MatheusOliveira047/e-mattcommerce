import { useEffect } from 'react'

import CategoryItem from '../category-item'
import Loading from '../Loading'
import {CategoriesContainer,CategoriesContent} from './categories.styled'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/toolkit/category/category.slice'
import { useAppSelector } from '../../hooks/redux,hooks'

const Categories = ()=>{

  const {categories,isLoading} = useAppSelector((rootReducer)=> rootReducer.categoryReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCategories() as any)
  },[])

  return(
    <CategoriesContainer>
      {isLoading && <Loading/>}
      <CategoriesContent>
        {categories.map(category => (
          <div>
          <CategoryItem key={category.id} category={category}/>
          </div>
        
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories