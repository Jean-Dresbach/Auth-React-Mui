import { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material"

import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Router"

export function App() {
  const [themeState, setThemeState] = useState<"light" | "dark">("light")

  const theme = createTheme({
    palette: {
      mode: themeState
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
