import { createTheme } from '@rneui/themed'

export const theme = createTheme({
   mode: 'dark',
   lightColors: {
      primary: '#2A0944',
      secondary: 'rgba(42,9,68,0.3)',
      disabled: 'rgba(42,9,68,0.5)',
      divider: '#FEC260',
      error: '#A10035',
      background: '#eeeeee',
      grey0: 'rgba(255,255,255,0.75)',
      white: 'white',
      black: 'black',
   },
   darkColors: {
      primary: '#2A0944',
      secondary: 'rgba(42,9,68,0.3)',
      disabled: 'rgba(42,9,68,0.5)',
      divider: '#FEC260',
      error: '#A10035',
      background: '#3FA796',
      grey0: 'rgba(255,255,255,0.75)',
      white: 'white',
      black: 'black',
   },
})
