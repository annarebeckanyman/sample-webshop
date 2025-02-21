import Checkout from '@pages/Checkout'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'
import ProductDetails from '@pages/ProductDetails'
import Products from '@pages/Products'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])

export default Router
