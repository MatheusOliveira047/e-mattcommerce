import { useState,useEffect } from 'react'
import {getDocs,collection} from 'firebase/firestore'

import {CategoriesContainer,CategoriesContent} from './categories.styled'
import Category from '../../types/category.types'
import CategoryItem from '../category-item'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

const Categories = ()=>{
  const [categories,setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

     const querySnapShot =  await getDocs(collection(db,'categories').withConverter(categoryConverter))
      
      querySnapShot.forEach((doc)=>{
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
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