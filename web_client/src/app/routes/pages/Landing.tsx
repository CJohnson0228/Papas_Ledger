import { useGSAP } from "@gsap/react"
import { Button } from "@mui/material"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import gsap from "gsap"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

gsap.registerPlugin(useGSAP)

function Landing() {
  const container = useRef(null)
  const timeline = useRef(gsap.timeline())
  const exitTimeline = useRef(gsap.timeline())
  const navigate = useNavigate()

  useGSAP(() => {
    timeline.current = gsap
      .timeline()
      .from('#landing-paper', { y: 10, autoAlpha: 0, duration: 0.5 })
      .from('#landing-title', { y: -10, opacity: 0 }, '>')
      .from('#landing-subtitle', { y: 10, opacity: 0 }, '>')
      .from('#landing-button', { y: 100, opacity: 0 }, '>')
  }, { scope: container })

  const handleBegin = () => {
    exitTimeline.current = gsap
      .timeline({ onComplete: () => navigate('/login') })
      .to('#landing-button', { y: 100, opacity: 0 })
      .to('#landing-subtitle', { y: 10, opacity: 0 }, '>')
      .to('#landing-title', { y: -10, opacity: 0 }, '>')
      .to('#landing-paper', { y: 10, autoAlpha: 0, duration: 0.5 })
  }

  return (
    <Box ref={container}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Paper id='landing-paper' sx={{ p: 3, borderRadius: 3 }}>
        <Typography
          id='landing-title'
          variant="h3"
          color="primary"
          sx={{ fontFamily: 'Nothing You Could Do' }}>
          Papa's Ledger
        </Typography>
        <Typography
          id='landing-subtitle'
          variant="body2"
          color="textSecondary"
          sx={{
            marginTop: '-10px',
            paddingLeft: '80px',
          }}>
          Financial Tracking Re-Imagined
        </Typography>
      </Paper>
      <Button id='landing-button'
        variant='contained'
        onClick={handleBegin}
        sx={{ position: 'absolute', bottom: 20 }}>
        Begin
      </Button>
    </Box>
  )
}

export default Landing
