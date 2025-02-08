import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    ledgerEven: string
    ledgerOdd: string
  }
  interface PaletteOptions {
    ledgerEven?: string
    ledgerOdd?: string
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#80ffbf' },
    secondary: { main: '#80acff' },
    warning: { main: '#ffab73' },
    error: { main: '#cc3340' },
    info: { main: '#3db1ff' },
    background: {
      paper: '#1f1f1f',
      default: '#131313',
    },
    ledgerEven: '#bbece7',
    ledgerOdd: '#a0d0cb',
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
})
