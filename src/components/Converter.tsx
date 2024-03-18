import { Box, Container, Grid, Typography } from '@mui/material';

import CurrencySelector from './CurrencySelector';
import CurrencySwitcher from './CurrencySwitcher';

const Converter = () => {
  const box1Styles = {
    background: '#fdfdfd',
    textAlign: 'center',
    color: '#222',
    minHeight: '15rem',
    borderRadius: 2,
    padding: '2rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  };
  const box2Style = {
    display: 'flex',
  };
  return (
    <Container>
      <Box sx={box1Styles} maxWidth={1280}>
        <Typography
          sx={{ margin: '10px 0 50px 0', textAlign: 'center' }}
          variant="h3"
          component="h1"
        >
          Cryptocurrency Converter
        </Typography>
        <Box sx={box2Style}>
          <CurrencySelector />
          <CurrencySwitcher />
          <CurrencySelector />
        </Box>
      </Box>
    </Container>
  );
};

export default Converter;
