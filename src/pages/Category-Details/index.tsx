import {FunctionComponent} from 'react'
import CategoryDetails from '../../components/category-details'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage: FunctionComponent = ()=>{
  const {id} = useParams()

  if(!id) return null
  
  return (
    <>
      <CategoryDetails categoryId={id}/>
    </>
  )
}

export default CategoryDetailsPage