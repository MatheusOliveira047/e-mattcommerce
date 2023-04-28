import React, { FunctionComponent, createContext, useEffect, useMemo, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  productsPrice: number
  productsCount:number
  products: CartProduct[]
  toggleCart: ()=> void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId:string) =>void
  increaseProductQuantity: (productId:string) =>void
  subtractProductQuantity: (productId:string) => void
}

interface ICartContextProps {
  children: React.ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products:[],
  toggleCart: ()=>{},
  addProductToCart: ()=> {},
  removeProductFromCart: ()=>{},
  increaseProductQuantity: ()=>{},
  subtractProductQuantity:()=>{},
  productsPrice:0,
  productsCount:0
})

const CartContextProvider: FunctionComponent<ICartContextProps> = ({children})=>{
  const [isVisible,setIsVisible] = useState(false)
  const [products,setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
    )

    setProducts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const productsPrice = useMemo(()=>{
    return products.reduce((acc, currentProduct)=>{
      return acc + (currentProduct.price * currentProduct.quantity)
    },0)
  }, [products])

  const productsCount = useMemo(()=>{
    return products.reduce((acc, currentProduct)=>{
      return acc + currentProduct.quantity
    },0)
  }, [products])

  const toggleCart = ()=>{
    setIsVisible(prevState => !prevState)
  }

  const addProductToCart = (product: Product)=>{
    const productIsAlreadyInCart = products.some((item)=> item.id === product.id)
    if(productIsAlreadyInCart){
     return setProducts(products => products.map(item=> item.id === product.id ? {...item, quantity: item.quantity + 1}: item))
    }
    setProducts(prevState => [...prevState, {...product, quantity:1}])
  }


  const removeProductFromCart = (productId:string)=>{
    setProducts(products => products.filter(product=> product.id !== productId))
  }

  const increaseProductQuantity = (productId:string)=>{
    setProducts(products=> products.map(product=> product.id === productId ? {...product,quantity: product.quantity + 1} : product))
  }

  const subtractProductQuantity = (productId:string)=>{
    setProducts(products=> products.map(product=> product.id === productId ? {...product,quantity: product.quantity - 1} : product).filter(product => product.quantity > 0))
  }

  

  return(
    <CartContext.Provider value={{productsCount,productsPrice,isVisible,products,toggleCart,addProductToCart,removeProductFromCart,increaseProductQuantity,subtractProductQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
