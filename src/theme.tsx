import { indigo, orange, pink } from '@material-ui/core/colors'
import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { light: indigo[300], main: indigo[500], dark: indigo[700] },
    secondary: { light: pink[300], main: pink[500], dark: pink[700] },
    warning: { light: orange[300], main: orange[500], dark: orange[700] }
  },
  typography: {
    fontFamily: 'GeosansLight',
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2rem'
    }
  },
  spacing: factor => `${0.25 * factor}rem`,
})
export default theme