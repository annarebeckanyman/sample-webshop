import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem, ProductDetails } from '@typings/product.types'

type ProductsState = {
  shoppingCart: CartItem[]
  selectedProduct: ProductDetails | null
}

const initialState: ProductsState = {
  shoppingCart: [],
  selectedProduct: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setShoppingCart: (state, action: PayloadAction<CartItem[]>) => {
      state.shoppingCart = action.payload
    },
    setSelectedProduct: (state, action: PayloadAction<ProductDetails | null>) => {
      state.selectedProduct = action.payload
    },
  },
})

export const { setShoppingCart, setSelectedProduct } = productsSlice.actions

export default productsSlice.reducer
