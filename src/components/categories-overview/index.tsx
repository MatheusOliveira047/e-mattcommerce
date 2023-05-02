import {FunctionComponent, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import Loading from '../Loading'
import CategoryOverview from '../category-overview'

import { fectchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux,hooks'

import {Container} from './categories-overview.styled'

const CategoriesOverview: FunctionComponent = ()=>{
 

  const {categories,isLoading} = useAppSelector((rootReducer)=> rootReducer.categoryReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(categories.length === 0){
      dispatch(fectchCategories() as any)
    }
  },[])

  if(isLoading) return <Loading/>

  return (
    <Container>
      {categories.map( category => <CategoryOverview key={category.id} category={category} />)}
    </Container>
  )
}

export default CategoriesOverview