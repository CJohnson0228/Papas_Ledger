import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { RouterProvider } from "react-router-dom"
import router from "./routes/router"

export default function App() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: 'relative',
      }}>
      <RouterProvider router={router} />
    </Box>
  )
}