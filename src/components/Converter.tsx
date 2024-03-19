import {
  Box,
  Container,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

import { Coin, ITicker } from '../types/interfaces';
import CurrencySelector from './CurrencySelector';
import CurrencySwitcher from './CurrencySwitcher';
const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [prices, setPrices] = useState<ITicker[]>();
  const [coin1, setCoin1] = useState<Coin>('BTC');
  const [coin2, setCoin2] = useState<Coin>('USDT');
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let fromAmount = 0,
    toAmount = 0;

  if (amountInFromCurrency && prices) {
    fromAmount = amount;
    const amount1Price = +prices.filter((p) => p.symbol === coin1)[0].price * amount;
    const coin2Price = +prices.filter((p) => p.symbol === coin2)[0].price;
    toAmount = amount1Price / coin2Price;
  } else if (!amountInFromCurrency && prices) {
    toAmount = amount;
    const amount2Price = +prices.filter((p) => p.symbol === coin2)[0].price * amount;
    const coin1Price = +prices.filter((p) => p.symbol === coin1)[0].price;
    fromAmount = amount2Price / coin1Price;
  }

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

  const handleFromAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
    setAmountInFromCurrency(false);
  };

  const currencyNameDict = {
    BTC: 'Bitcoin',
    ETH: 'Etherium',
    USDT: 'USDT',
  };

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };
  const curDate = new Date().toLocaleDateString('ru-RU', options);

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
            amount={fromAmount}
            onChangeAmount={handleFromAmountChange}
          />
          <CurrencySwitcher
            onSwitchCurrencies={() => {
              const tempCoin = coin1;
              setCoin1(coin2);
              setCoin2(tempCoin);
            }}
          />
          <CurrencySelector
            currencyOptions={currencyOptions}
            selectedCurrency={coin2}
            onChangeCurrency={(event: SelectChangeEvent) => {
              setCoin2(event.target.value as Coin);
            }}
            amount={toAmount}
            onChangeAmount={handleToAmountChange}
          />
        </Box>
        <Typography
          sx={{ margin: '20px 0 5px 0', textAlign: 'left' }}
          variant="body1"
          component="p"
        >
          {`${fromAmount} ${currencyNameDict[coin1]} = ${toAmount} ${currencyNameDict[coin2]}`}
        </Typography>
        <Typography
          sx={{ margin: '0 0 10px 0', textAlign: 'left', color: 'gray' }}
          variant="body1"
          component="p"
        >
          The data is provided for informational purposes only &#183; {`${curDate}`}
        </Typography>
      </Box>
    </Container>
  );
};

export default Converter;
