import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Router from '@app/Router'
import store from '@store/store'
import theme from '@styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <RouterProvider router={Router} />
      </MantineProvider>
    </Provider>
  </StrictMode>
)
