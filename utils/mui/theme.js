import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue, orange, red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#073040',
    },
    secondary: {
      main: '#BDBF09',
    },
    background:{
      default: '#F8D6EE',
      paper:'#F5EFED'
    },
    text:{
      primary:'#298580'
    },
    error: {
      main: red.A400,
    },
  },

});

export default theme;