import { createTheme } from "@mui/material"
import { lightGreen, orange, red } from "@mui/material/colors"

export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: orange[700],
      contrastText: "#fff"
    },
    error: {
      main: red[600]
    },
    success: {
      main: lightGreen[700]
    },
    background: {
      default: "#FAFCFF",
      paper: "#FAFCFF"
    }
  }
})
