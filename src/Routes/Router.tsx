import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Header } from "../components/Header"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
