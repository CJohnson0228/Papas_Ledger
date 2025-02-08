import { useGSAP } from "@gsap/react"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import gsap from "gsap"
import { useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function AuthLayout() {
  const container = useRef(null)
  const timeline = useRef(gsap.timeline())
  const exitTimeline = useRef(gsap.timeline())
  const navigate = useNavigate()

  /* Loading Animation */
  useGSAP(() => {
    timeline.current = gsap
      .timeline()
      .from('#auth-paper', { y: 10, opacity: 0, duration: 0.5 })
  }, { scope: container })

  const handleSubmit = (
    { email, password, firstName, lastName }:
      { email: string, password: string, firstName?: string, lastName?: string }
  ) => {
    // Handle api call for login/register
    // time to build the server
    exitTimeline.current = gsap
      .timeline({ onComplete: () => navigate('/') })
      .to('#auth-paper', { y: 10, opacity: 0, duration: 0.5 })
  }

  return (
    <Box
      ref={container}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
      <Paper
        id='auth-paper'
        sx={{
          py: 3, px: 5,
          borderRadius: 3,
          minWidth: '30vw',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Outlet context={handleSubmit} />
      </Paper>
    </Box>
  )
}