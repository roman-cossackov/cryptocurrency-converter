import { Box, Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';

interface CurrencySwitcherProps {
  currencyOptions: string[];
  selectedCurrency: string;
  onChangeCurrency: (event: SelectChangeEvent) => void;
  amount: number;
  onChangeAmount: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CurrencySwitcher = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}: CurrencySwitcherProps) => {
  const boxStyles = {
    display: 'flex',
    border: '3px solid lightgray',
    borderRadius: '10px',
  };
  const inputStyles = {
    border: 'none',
    borderRight: '3px solid lightgray',
    textAlign: 't',
    height: '60px',
    flex: 2,
    input: { textAlign: 'right' },
    borderRadius: '10px 0 0 10px',
    fontSize: '1.65rem',
    padding: '10px',
  };
  const selectStyles = {
    flex: '1',
    maxWidth: '30%',
    border: 'none',
    boxShadow: 'none',
    '.MuiOutlinedInput-notchedOutline': { border: 0 },
    borderRadius: '0 10px 10px 0',
  };

  return (
    <Box sx={boxStyles}>
      <Input
        id="crypto-input"
        type="number"
        sx={inputStyles}
        disableUnderline={true}
        inputProps={{
          min: 0,
        }}
        value={amount}
        onChange={onChangeAmount}
      />
      <Select
        labelId="crypto-select-label"
        id="crypto-input"
        sx={selectStyles}
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CurrencySwitcher;
