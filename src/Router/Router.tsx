import { lazy } from "react"
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Layout from "../Layout/Layout"
import Error from "../Helper/Error"

const Home = lazy(() => import("../Pages/Home"))
const Cart = lazy(() => import("../Pages/Cart"))
const Checkout = lazy(() => import("../Pages/Checkout"))
const ItemDescription = lazy(() => import("../Pages/ItemDescription"))

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          action: async ({ request }) => {
            const formData = await request.formData()
            const data = Object.fromEntries(formData)
            console.log(data)
            return redirect("/cart")
          },
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/item/:?",
          element: <ItemDescription />,
          loader: async ({ request }) => {
            // const id = request.url
            const url = new URL(request.url)
            const query = url.searchParams.get("q")
            console.log(query)
            // console.log(id)
          },
          errorElement: <Error />,
        },

        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ])
  return <RouterProvider router={router} />
}

export default AppRouter
