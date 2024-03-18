import { Box, Grid, Input, MenuItem, Select } from '@mui/material';

const CurrencySwitcher = (props: CurrencySwitcherProps) => {
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
      />
      <Select
        labelId="crypto-select-label"
        id="crypto-input"
        // value={}
        // onChange={}
        sx={selectStyles}
      >
        <MenuItem value={1}></MenuItem>
        <MenuItem value={10}>BTC</MenuItem>
        <MenuItem value={20}>ETH</MenuItem>
        <MenuItem value={30}>USDT</MenuItem>
      </Select>
    </Box>
  );
};

export default CurrencySwitcher;
