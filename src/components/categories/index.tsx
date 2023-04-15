import { useState,useEffect } from 'react'
import axios from 'axios'

import './Categories.css'
import Category from '../../types/category.types'

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
    <div className="categories-container">
      <div className="categories-content">

      </div>
    </div>
  )
}

export default Categories