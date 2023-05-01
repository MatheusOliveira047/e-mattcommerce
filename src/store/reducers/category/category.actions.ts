import { Dispatch } from 'redux'
import { db } from '../../../config/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { categoryConverter } from '../../../converters/firestore.converters'
import Category from '../../../types/category.types'

export const fectchCategories = ()=>{
  return async (dispatch: Dispatch)=>{
    dispatch({type: 'categories/fetchStart'})

    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapShot =  await getDocs(collection(db,'categories').withConverter(categoryConverter))

      querySnapShot.forEach((doc)=>{
        categoriesFromFirestore.push(doc.data())
      })

      dispatch({
        type: 'categories/fetchSuccess',
        payload: categoriesFromFirestore
      })

    } catch (error) {
      dispatch({type:'categories/fetchFailure'})
    }
  }
}