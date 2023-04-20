import React, { FunctionComponent, createContext, useState } from 'react';
import Category from '../types/category.types';
import { collection, getDocs } from 'firebase/firestore';
import { categoryConverter } from '../converters/firestore.converters';
import { db } from '../config/firebase.config';

interface ICategoryContext {
  categories: Category[]
  fetchCategories: ()=> Promise<void>
  isLoading:boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading:false
})



interface ICategoryContextProvider {
  children: React.ReactNode
}
const CategoryContextProvider: FunctionComponent<ICategoryContextProvider> = ({children})=>{
  const [categories,setCategories] = useState<Category[]>([])
  const [isLoading,setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
    setIsLoading(true)
    const categoriesFromFirestore: Category[] = []
    const querySnapShot =  await getDocs(collection(db,'categories').withConverter(categoryConverter))
      
      querySnapShot.forEach((doc)=>{
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({error})
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider value={{isLoading,categories,fetchCategories}}>{children} </CategoryContext.Provider>
  )
}

export default CategoryContextProvider