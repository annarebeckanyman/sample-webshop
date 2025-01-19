import { createBrowserRouter } from 'react-router-dom'
import NotFoundPage from '@pages/NotFoundPage'
import ProductsPage from '@pages/ProductsPage'
import ContactPage from '@pages/ContactPage'
import CheckoutPage from '@pages/CheckoutPage'
import Layout from './Layout'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
    ],
  },
])

export default Router
