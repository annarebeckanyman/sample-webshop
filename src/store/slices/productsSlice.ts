import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Work } from '@typings/products.types'

type ProductsState = {
  shoppingCart: Work[]
  currentProduct: Work | null
}

const initialState: ProductsState = {
  shoppingCart: [],
  currentProduct: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setShoppingCart: (state, action: PayloadAction<Work[]>) => {
      state.shoppingCart = action.payload
    },
    setCurrentProduct: (state, action: PayloadAction<Work>) => {
      state.currentProduct = action.payload
    },
  },
})

export const { setShoppingCart, setCurrentProduct } = productsSlice.actions

export default productsSlice.reducer
