import './App.css';

import { Box, createTheme, ThemeProvider } from '@mui/material';

import Background from './components/Background/Background';
import Converter from './components/Converter';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Madimi One',
    },
    // components: {
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       input: {
    //         outline: 'none',
    //       },
    //     },
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Box display="flex" justifyContent="center" marginTop="100px">
          <div className="App">
            <Converter />
          </div>
        </Box>
      </Background>
    </ThemeProvider>
  );
}

export default App;
