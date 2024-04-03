import { Box, Grid, useMediaQuery } from "@mui/material"
import { SignUpForm } from "../components/SignupForm"

import signUpImg from "../assets/Forms-rafiki.svg"

export function SignUp() {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <SignUpForm />
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: `${media ? "none" : "flex"}`,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src={signUpImg} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  )
}
