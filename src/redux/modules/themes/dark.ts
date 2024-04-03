import { createTheme } from "@mui/material"
import { orange, lightGreen, red } from "@mui/material/colors"

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500],
      contrastText: "#fff"
    },
    error: {
      main: red[400]
    },
    success: {
      main: lightGreen[500]
    },
    background: {
      default: "#0b1927",
      paper: "#0b1927"
    }
  }
})
