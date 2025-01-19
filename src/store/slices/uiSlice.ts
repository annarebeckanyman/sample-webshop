import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UiState = {
  showMobileMenu: boolean
}

const initialState: UiState = {
  showMobileMenu: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.showMobileMenu = action.payload
    },
  },
})

export const { toggleMobileMenu } = uiSlice.actions

export default uiSlice.reducer
