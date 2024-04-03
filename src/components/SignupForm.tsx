import { useState, MouseEvent, ChangeEvent, FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Alert,
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
import { orange } from "@mui/material/colors"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useAppDispatch, signUp } from "../redux"

export function SignUpForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: ""
  })

  const [showAlerEmail, setShowAlertEmail] = useState(false)
  const [showAlerPassword, setShowAlertPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const checkEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]{3,}@(gmail|hotmail|outlook)\.(com|br)$/

    if (email) {
      if (regex.test(email)) {
        return true
      } else {
        return false
      }
    }
  }

  const checkPassword = (password: string) => {
    const regex =
      /^(?!.*?(012|123|234|345|456|567|678|789|890|987|876|765|654|543|432|321|210))[a-zA-Z0-9]{5,8}$/

    if (password) {
      if (regex.test(password)) {
        return true
      } else {
        return false
      }
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === "email") {
      checkEmail(value) ? setShowAlertEmail(false) : setShowAlertEmail(true)
    }
    if (name === "password") {
      checkPassword(value)
        ? setShowAlertPassword(false)
        : setShowAlertPassword(true)
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!showAlerEmail || !showAlerPassword) {
      if (formData.password === formData.confirm) {
        dispatch(signUp({ email: formData.email, password: formData.password }))

        navigate("/")
      } else {
        alert("Senhas não conferem!")
      }
    }
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
          Sign Up
        </Typography>
        <Divider />
      </Box>

      <TextField
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      {showAlerEmail && (
        <Alert severity="error" variant="filled">
          Deve conter @ , ser um email válido (gmail / hotmail/ outlook) , ter
          no mínimo 3 caracteres antes do @.
        </Alert>
      )}

      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
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
          onChange={handleInputChange}
        />
      </FormControl>
      {showAlerPassword && (
        <Alert severity="error" variant="filled">
          Não pode ser um conjunto de caracteres sequenciais ( exemplo :
          1123456) . Além disso, para uma senha ser registrada deve conter entre
          5 e 8 caracteres.
        </Alert>
      )}
      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-confirm">
          Confirm password
        </InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-confirm"
          type={showConfirm ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirm(!showConfirm)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirm ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm password"
          name="confirm"
          value={formData.confirm}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: "100vw", fontWeight: "bold", mt: 2 }}
      >
        Register
      </Button>
      <Typography>
        Already have an account?{" "}
        <Link to="/" style={{ textDecoration: "none", color: orange[600] }}>
          Click here
        </Link>
      </Typography>
    </Box>
  )
}
