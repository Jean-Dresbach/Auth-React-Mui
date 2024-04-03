import { Box, Grid, useMediaQuery } from "@mui/material"
import { FormSignIn } from "../components/SigninForm"

import loginImg from "../assets/Tablet login-pana.svg"

export function SignIn() {
  const media = useMediaQuery("(max-width:600px)")

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs
          sx={{
            display: `${media ? "none" : "flex"}`,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src={loginImg} style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FormSignIn />
        </Grid>
      </Grid>
    </Box>
  )
}
