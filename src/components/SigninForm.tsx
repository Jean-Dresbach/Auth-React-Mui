import {
  useState,
  MouseEvent,
  FormEvent,
  ChangeEvent,
  SyntheticEvent
} from "react"
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link } from "react-router-dom"
import { orange } from "@mui/material/colors"
import { useAppDispatch, signIn } from "../redux"

export function FormSignIn() {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rember: false
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(signIn(formData))
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: MouseEvent<HTMLButtonElement> | SyntheticEvent<Element, Event>
  ) => {
    event.preventDefault()
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "500px"
      }}
    >
      <Box mb={2}>
        <Typography variant="h4" gutterBottom component={"h1"}>
          Sign In
        </Typography>
        <Divider />
      </Box>

      <TextField
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
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
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: "100vw", fontWeight: "bold", mt: 2 }}
      >
        Enter
      </Button>

      <Typography>
        Don't have an account?{" "}
        <Link
          to="/signup"
          style={{ textDecoration: "none", color: orange[600] }}
        >
          Click here
        </Link>
      </Typography>
    </Box>
  )
}
