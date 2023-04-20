import { useEffect } from 'react'
import {getDocs,collection} from 'firebase/firestore'

import {CategoriesContainer,CategoriesContent} from './categories.styled'
import Category from '../../types/category.types'
import CategoryItem from '../category-item'
import { useContext } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../Loading'


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