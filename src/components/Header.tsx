import { useAppDispatch, useAppSelector } from "../redux"
import { Container, IconButton } from "@mui/material"
import { toggleTheme } from "../redux/modules/themes/themeSlice"
import { DarkMode, LightMode } from "@mui/icons-material"
import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"

export function Header() {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  function handleToggleTheme() {
    dispatch(toggleTheme())
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end"
        }}
        component={"header"}
      >
        <IconButton
          aria-label="toggle theme"
          onClick={handleToggleTheme}
          sx={{ p: 0 }}
        >
          {theme === "light" ? (
            <LightMode sx={{ fill: "black" }} />
          ) : (
            <DarkMode />
          )}
        </IconButton>
      </Box>

      <Outlet />
    </Container>
  )
}
