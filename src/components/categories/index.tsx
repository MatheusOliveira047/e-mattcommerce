import { useState,useEffect } from 'react'
import axios from 'axios'

import {CategoriesContainer,CategoriesContent} from './categories.styled'
import Category from '../../types/category.types'
import CategoryItem from '../category-item'

const Categories = ()=>{
  const [categories,setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const {data} = await axios.get(`https://club-ecommerce-api.up.railway.app/api/category`)
      console.log(data)
      setCategories(data) 
      
    } catch (error) {
      console.log({error})
    }
  }
  console.log(categories)

  useEffect(()=>{
    fetchCategories()
  },[])

  return(
    <CategoriesContainer>
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