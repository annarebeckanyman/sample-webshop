import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/uiSlice'
import { productsSlice } from './slices/productsSlice'

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
