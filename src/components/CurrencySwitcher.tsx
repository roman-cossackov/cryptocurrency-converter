import { Button, Grid } from '@mui/material';

import ExchangeIcon from './icons/ExchangeIcon/ExchangeIcon';

const CurrencySwitcher = () => {
  return (
    <Grid
      item
      xs={12}
      md="auto"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Button sx={{ borderRadius: 1 }}>
        <ExchangeIcon sx={{ fontSize: 30 }} color="rgb(130, 130, 130)" />
      </Button>
    </Grid>
  );
};

export default CurrencySwitcher;
