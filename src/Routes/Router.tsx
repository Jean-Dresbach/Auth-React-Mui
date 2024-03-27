import { createBrowserRouter } from "react-router-dom"

import { LoginAndSignup } from "../pages/loginAndSignup"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginAndSignup />
  }
])
