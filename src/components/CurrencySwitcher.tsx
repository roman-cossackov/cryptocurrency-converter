import { Box, Button } from '@mui/material';

import ExchangeIcon from '../icons/ExchangeIcon/ExchangeIcon';

interface CurrencySwitcherProps {
  onSwitchCurrencies: (event: React.MouseEvent<HTMLElement>) => void;
}

const CurrencySwitcher = ({ onSwitchCurrencies }: CurrencySwitcherProps) => {
  return (
    <Box display="flex" justifyContent="center" alignContent="center">
      <Button sx={{ borderRadius: 1 }} onClick={onSwitchCurrencies}>
        <ExchangeIcon sx={{ fontSize: 30 }} color="rgb(130, 130, 130)" />
      </Button>
    </Box>
  );
};

export default CurrencySwitcher;
