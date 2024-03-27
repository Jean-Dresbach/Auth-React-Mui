import { useState, MouseEvent } from "react"
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

export function LoginAndSignup() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Container maxWidth="lg">
      <Box
        component={"form"}
        maxWidth={"500px"}
        sx={{ display: "flex", flexDirection: "column" }}
        gap={2}
      >
        <Box mb={2}>
          <Typography variant="h4" gutterBottom component={"h1"}>
            Login
          </Typography>
          <Divider />
        </Box>

        <TextField type="email" label="Email" required />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControlLabel control={<Checkbox />} label="Remember-me" />
        <Button
          type="submit"
          variant="contained"
          sx={{ maxWidth: "min-content" }}
        >
          Enter
        </Button>
      </Box>
    </Container>
  )
}
