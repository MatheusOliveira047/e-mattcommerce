import {FunctionComponent, useContext, useEffect} from 'react'

import {Container} from './categories-overview.styled'

import { CategoryContext } from '../../contexts/category.context'
import CategoryOverview from '../category-overview'

const CategoriesOverview: FunctionComponent = ()=>{
  const {fetchCategories,categories} = useContext(CategoryContext)

  useEffect(()=>{
    if(categories.length === 0){
      fetchCategories()
    }
  },[])

  return (
    <Container>
      {categories.map( category => <CategoryOverview key={category.id} category={category} />)}
    </Container>
  )
}

export default CategoriesOverview