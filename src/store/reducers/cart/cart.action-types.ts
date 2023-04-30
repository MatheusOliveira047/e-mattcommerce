

const CartActionsTypes = {
  TOGGLE_CART: 'cart/toggleCart' as const,
  ADD_PRODUCT_TO_CART: 'cart/addProductToCart' as const,
  REMOVE_PRODUCT_FROM_CART: 'cart/removeProductFromCart' as const,
  INCREASE_PRODUCT_QUANTITY: 'cart/incleaseProductQuantity' as const,
  SUBTRACT_PRODUCT_QUANTITY: 'cart/subtractProductQuantity' as const,
  CLEAR_PRODUCTS: 'cart/clearProducts' as const
}

export default CartActionsTypes
