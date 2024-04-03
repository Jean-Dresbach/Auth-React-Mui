import { CssBaseline, ThemeProvider } from "@mui/material"

import { dark, light, useAppSelector } from "./redux"
import Routes from "./Routes/Router"

export function Root() {
  const currentTheme = useAppSelector((state) =>
    state.theme === "light" ? light : dark
  )
  console.log(currentTheme)

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}
