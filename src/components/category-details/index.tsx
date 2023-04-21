import { useEffect ,FunctionComponent, useState} from 'react'
import {CategoryTitle,Container,IconContainer,ProductsContainer} from './category-details.styled'
import Category from '../../types/category.types'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import Loading from '../Loading'
import {BiChevronLeft} from 'react-icons/bi'
import ProductItem from '../product-item'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({categoryId})=>{
  const [category,setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchCategory = async()=>{
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(query(
          collection(db,'categories').withConverter(categoryConverter), where('id','==',categoryId)))
  
          const category = querySnapshot.docs[0]?.data()
          setCategory(category)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }

    fetchCategory()
  },[])

  if(isLoading) return <Loading />

  const handleHome = ()=>{
    navigate('/')
  }

  return(
    <Container>
      <CategoryTitle>
        <IconContainer>
          <BiChevronLeft onClick={handleHome} size={36}/>
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>
      <ProductsContainer>
        {category?.products.map((product)=>(
          <ProductItem key={product.id} product={product}/>
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryDetails