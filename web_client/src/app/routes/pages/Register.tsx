import { useGSAP } from "@gsap/react"
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Link, TextField, Typography, useTheme } from "@mui/material"
import gsap from "gsap"
import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

function Register() {
  const handleSubmit = useOutletContext<(
    { email, password, firstName, lastName }:
      { email?: string, password?: string, firstName?: string, lastName?: string }
  ) => void>()
  const theme = useTheme()
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  useGSAP(() => {
    gsap.from('#register-content', { opacity: 0 })
  })

  const handleSwitch = () => {
    gsap.to('#register-content', { opacity: 0, onComplete: () => navigate('/login') })
  }

  return (
    <Box id='register-content' sx={{ width: '100%' }}>
      <Typography
        variant='h4'
        color='primary'
        align="center">
        WELCOME ABOARD
      </Typography>
      <Typography
        variant='body2'
        color='textSecondary'
        align="center"
        sx={{ paddingBottom: '10px', fontSize: '0.8rem' }}>
        Please enter your details
      </Typography>
      <FormGroup>
        <TextField
          variant='standard'
          label='First Name'
          type='text'
          placeholder="Test"
          autoComplete="one-time-code"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }} />
        <TextField
          variant='standard'
          label='Last Name'
          type='text'
          placeholder="User"
          autoComplete="one-time-code"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }} />
        <TextField
          variant='standard'
          label='E-mail'
          type='email'
          placeholder="test@email.com"
          autoComplete="one-time-code"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }} />
        <TextField
          variant='standard'
          label='Password'
          type='password'
          placeholder="Abcd123!"
          autoComplete="one-time-code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '30px 0',
          alignItems: 'center'
        }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={remember}
                onClick={() => { setRemember(!remember) }}
                sx={{ fontSize: '1rem' }} />
            }
            label='Remember for 30 days'
            slotProps={{ typography: { sx: { fontSize: '0.7rem' } } }} />
        </Box>
        <Button
          onClick={() => handleSubmit({ email: email, password: password, firstName: firstName, lastName: lastName })}
          fullWidth
          size='small'
          variant='contained'>
          Sign Up
        </Button>
      </FormGroup>
      <Typography
        align='center'
        variant="body2"
        sx={{ fontSize: '0.8rem', margin: '10px 0' }}>
        Already have an account?
        <Link onClick={handleSwitch} style={{ color: theme.palette.primary.main, paddingLeft: '10px', cursor: 'pointer' }}>
          Sign In
        </Link>
      </Typography>
    </Box>
  )
}

export default Register
