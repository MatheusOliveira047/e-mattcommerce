import {FunctionComponent, useContext, useEffect} from 'react'

import {Container} from './categories-overview.styled'

import { CategoryContext } from '../../contexts/category.context'

const CategoriesOverview: FunctionComponent = ()=>{
  const {fetchCategories,categories} = useContext(CategoryContext)

  useEffect(()=>{
    if(categories.length === 0){
      fetchCategories()
    }
  },[])

  return (
    <Container>
      {categories.map( category => <p>{category.displayName}</p>)}
    </Container>
  )
}

export default CategoriesOverview