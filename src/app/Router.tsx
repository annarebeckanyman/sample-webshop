import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import NotFoundPage from '@pages/NotFoundPage'
import ProductsPage from '@pages/ProductsPage'
import DetailsPage from '@pages/DetailsPage'
import ContactPage from '@pages/ContactPage'
import CheckoutPage from '@pages/CheckoutPage'

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
        path: '/product/:id',
        element: <DetailsPage />,
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
