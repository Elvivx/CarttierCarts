import { lazy } from "react"
import {
  // BrowserRouter,
  createBrowserRouter,
  // Route,
  RouterProvider,
  // Routes,
} from "react-router-dom"
import Layout from "../Layout/Layout"

const Home = lazy(() => import("../Pages/Home"))
const Cart = lazy(() => import("../Pages/Cart"))
const Checkout = lazy(() => import("../Pages/Checkout"))
const ItemDescription = lazy(() => import("../Pages/ItemDescription"))

const AppRouter = () => {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="" element={<Layout />}>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/cart" element={<Cart />} />
  //         <Route path="/item/:?" element={<ItemDescription />} />
  //         <Route path="/checkout" element={<Checkout />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
  return <RouterProvider router={router} />
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/item/:?",
        element: <ItemDescription />,
        loader: async ({ params }) => {
          const id = params.id
          console.log(id)
        },
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
])

export default AppRouter
