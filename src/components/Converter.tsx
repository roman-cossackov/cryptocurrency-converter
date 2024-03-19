import {
  Box,
  Container,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { Coin, ITicker } from '../types/interfaces';
import CurrencySelector from './CurrencySelector';
import CurrencySwitcher from './CurrencySwitcher';
const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [prices, setPrices] = useState<ITicker[]>();
  const [coin1, setCoin1] = useState<Coin>('BTC');
  const [coin2, setCoin2] = useState<Coin>('USDT');
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);

  const getPrices = async () => {
    try {
      const response = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT"]',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: ITicker[] = await response.json();

      data.map((c) => {
        c.symbol = c.symbol.replace('USDT', '');
        return c;
      });

      data.push({ symbol: 'USDT', price: '1' });
      setPrices(data);

      const options: string[] = [];
      data.forEach((c) => {
        options.push(c.symbol);
      });
      setCurrencyOptions(options);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getPrices();
    const intervalId = setInterval(() => {
      getPrices();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateAmounts = () => {
    const firstAmout = prices[''];
  };

  const matches = useMediaQuery('(min-width:768px)');

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
    display: matches ? 'flex' : 'block',
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
          <CurrencySelector
            currencyOptions={currencyOptions}
            selectedCurrency={coin1}
            onChangeCurrency={(event: SelectChangeEvent) => {
              setCoin1(event.target.value as Coin);
            }}
          />
          <CurrencySwitcher />
          <CurrencySelector
            currencyOptions={currencyOptions}
            selectedCurrency={coin2}
            onChangeCurrency={(event: SelectChangeEvent) => {
              setCoin2(event.target.value as Coin);
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Converter;
