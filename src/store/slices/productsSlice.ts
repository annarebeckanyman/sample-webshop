import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@typings/products.types'

type ProductsState = {
  products: Product[]
  currentProduct: Product | null
}

const initialState: ProductsState = {
  products: [
    { id: '1', name: 'Produkt 1' },
    { id: '2', name: 'Produkt 2' },
    { id: '3', name: 'Produkt 3' },
    { id: '4', name: 'Produkt 4' },
    { id: '5', name: 'Produkt 5' },
  ],
  currentProduct: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setCurrentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload
    },
  },
})

export const { setProducts, setCurrentProduct } = productsSlice.actions

export default productsSlice.reducer
